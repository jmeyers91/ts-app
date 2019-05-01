import Knex, { MigratorConfig } from 'knex';

/**
 * A knex migration.
 */
export default interface Migration {
  /**
   * Migration name. Used by knex to keep track of which migrations have been run.
   */
  name: string;
  config?: MigratorConfig;

  /**
   * Called when migrating.
   */
  up(knex: Knex): any;

  /**
   * Called when rolling back.
   */
  down(knex: Knex): any;
}
