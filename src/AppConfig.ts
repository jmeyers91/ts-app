import Knex from 'knex';

export type LogFn = (...values: any[]) => any;

export default interface AppConfig {
  /**
   * Webserver port.
   */
  port: number;

  /**
   * Database instance.
   */
  database: Knex;

  /**
   * Log function.
   */
  log: LogFn;
}
