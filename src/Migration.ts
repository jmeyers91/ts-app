import Knex, { MigratorConfig } from 'knex';

/**
 * A knex migration.
 */
export default interface Migration {
  name: string;
  config?: MigratorConfig;
  up(knex: Knex): any;
  down(knex: Knex): any;
}
