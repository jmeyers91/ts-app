import Knex from 'knex';

export default interface AppConfig {
  /**
   * Webserver port.
   */
  port: number;

  /**
   * Database instance.
   */
  database: Knex;
}
