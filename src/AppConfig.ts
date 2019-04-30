import Knex from 'knex';

export default interface AppConfig {
  port: number;
  database: Knex;
}
