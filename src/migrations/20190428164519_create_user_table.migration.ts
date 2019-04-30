import Migration from '../Migration';
import { upTable, downTable } from '../utils/knexUtils';

const migration: Migration = {
  name: '20190428164519_create_user_table',
  up: upTable('app_user', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table
      .string('email')
      .unique()
      .notNullable();
    table.string('password').notNullable();
  }),
  down: downTable('app_user'),
};

export default migration;
