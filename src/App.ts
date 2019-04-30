import Koa from 'koa';
import { Server as HttpServer } from 'http';
import Knex, { Transaction } from 'knex';
import { migrateLatest, migrateRollback } from './utils/knexUtils';
import AppConfig from './AppConfig';
import Model from './Model';
import migrations from './migrations';
import Router from './Router';
import seeds from './seeds';
import models from './models';
import routers from './routers';

/**
 * Adds an index signature to `typeof models`.
 */
type ModelIndex = typeof models & { [key: string]: typeof Model };

export default class App {
  public readonly webserver: Koa;
  public readonly database: Knex;
  public readonly models: typeof models;
  private httpServer: HttpServer | null;

  constructor(public readonly config: AppConfig) {
    this.webserver = new Koa();
    this.database = config.database;
    this.httpServer = null;

    // Bind knex instance to each model and attach them all to this instance.
    this.models = Object.entries(models).reduce(
      (modelIndex, [key, model]) => {
        modelIndex[key] = model.bindKnex(this.database);
        return modelIndex;
      },
      {} as ModelIndex,
    );
  }

  /**
   * Start listening for API requests.
   */
  public async listen() {
    const api = new Router().prefix('/api');

    // Attach a reference to this instance to each request
    api.use(async (context, next) => {
      context.arp = this;

      try {
        await next();
        console.log(context.response.status, context.request.path);
      } catch (error) {
        console.log(context.response.status, context.request.path, error.stack);
        throw error;
      }
    });

    for (const router of routers) {
      api.use(router.routes()).use(router.allowedMethods());
    }

    this.webserver.use(api.routes()).use(api.allowedMethods());
    this.httpServer = await new Promise(resolve =>
      this.webserver.listen(this.config.port, resolve),
    );
  }

  /**
   * Stop the app. Disconnects the database and webserver.
   */
  public async stop() {
    const { httpServer } = this;
    if (httpServer) {
      await new Promise((resolve, reject) => {
        httpServer.close(error => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
      this.httpServer = null;
    }
    this.database.destroy();
  }

  /**
   * Start an app-level transaction. The passed function receives the transaction bound app.
   * Optionally pass config overrides as the second argument.
   * Returns a promise that resolves when the transaction body finishes running.
   */
  public async transaction(
    body: (app: App, trx: Transaction) => any,
    overrideConfig?: Partial<AppConfig>,
  ): Promise<void> {
    const { config } = this;
    const { database } = config;

    await database.transaction(trx => {
      const { config } = this;
      const transactionApp = new App({
        ...config,
        ...overrideConfig,
        database: trx,
      });

      return body(transactionApp, trx);
    });
  }

  /**
   * Like `transaction`, but rolls back even if the body runs successfully.
   */
  public async test<T>(
    body: (app: App) => Promise<T>,
    overrideConfig?: Partial<AppConfig>,
  ): Promise<T> {
    // rollback always throws, so `IGNORE_ERROR` is used to signal an intentional rollback
    const IGNORE_ERROR = Symbol('IGNORE_ERROR');
    let result!: T;
    try {
      await this.transaction((app, trx) => {
        body(app)
          .then(r => {
            result = r;
            return trx.rollback(IGNORE_ERROR);
          })
          .catch(trx.rollback);
      }, overrideConfig);
    } catch (error) {
      if (error !== IGNORE_ERROR) {
        throw error;
      }
    }
    return result;
  }

  /**
   * Run database migrations.
   */
  public async migrate(): Promise<string[]> {
    return await migrateLatest(this.database, migrations);
  }

  /**
   * Run database seed functions.
   */
  public async seed(): Promise<void> {
    for (const seed of seeds) {
      await seed(this);
    }
  }

  /**
   * Roll database back to last migration.
   */
  public async rollback(): Promise<void> {
    await migrateRollback(this.database, migrations);
  }
}
