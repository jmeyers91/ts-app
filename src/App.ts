import Koa from 'koa';
import { Server as HttpServer } from 'http';
import Knex, { Transaction } from 'knex';
import koaHelmet from 'koa-helmet';
import koaBodyparser from 'koa-bodyparser';
import { migrateLatest, migrateRollback } from './utils/knexUtils';
import AppConfig, { LogFn } from './AppConfig';
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

/**
 * Properties added to Koa's `context` object in middleware.
 */
export interface CustomContext {
  core: App;
  success(body: any, status?: number): void;
  fail(error: string, status?: number): never;
}

/**
 * Properties added to Koa's `context.state` object in middleware.
 */
export interface CustomState {
  foo?: string;
}

export default class App {
  /**
   * Koa webserver.
   * See: https://koajs.com/
   */
  public readonly webserver: Koa;

  /**
   * Knex SQL query builder.
   * See: https://knexjs.org/
   */
  public readonly database: Knex;

  /**
   * Objection models.
   * See: http://vincit.github.io/objection.js/
   */
  public readonly models: typeof models;
  private httpServer: HttpServer | null;
  private log: LogFn;

  constructor(public readonly config: AppConfig) {
    this.webserver = new Koa();
    this.database = config.database;
    this.log = config.log;
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
    api.use(koaBodyparser());

    // Attach a reference to this instance to each request
    api.use(async (context, next) => {
      const startTime = Date.now();
      Object.assign(context, getCustomContext(this, context));
      try {
        await next();
        this.log(
          `${context.response.status} ${context.request.path} ${Date.now() -
            startTime}ms`,
        );
      } catch (error) {
        context.response.status = error.status || 400;
        context.response.body = {
          error: { message: error.message },
        };
        this.log(
          `${context.response.status} ${context.request.path} ${Date.now() -
            startTime}ms`,
          error.stack,
        );
      }
    });

    for (const router of routers) {
      api.use(router.routes()).use(router.allowedMethods());
    }

    this.webserver.use(koaHelmet()); // Add security headers
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

function getCustomContext(app: App, context: Koa.Context): CustomContext {
  return {
    core: app,
    success(body, status) {
      context.response.status = status || 200;
      context.response.body = body;
    },

    fail(message, status) {
      throw Object.assign(new Error(message), { status });
    },
  };
}
