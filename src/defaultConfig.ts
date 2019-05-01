import Knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import AppConfig from './AppConfig';
import noop from './utils/noop';
import {
  isTest,
  DATABASE_URL,
  TEST_DATABASE_URL,
  PORT,
  TEST_PORT,
} from './env';

/**
 * Loads the default app config from the environment.
 *
 * @returns The default app config object.
 */
export default function defaultConfig(): AppConfig {
  const port = parseInt(isTest ? TEST_PORT : PORT, 10);
  const databaseUrl = isTest ? TEST_DATABASE_URL : DATABASE_URL;
  const log = isTest ? noop : console.log.bind(console);

  return {
    port,
    log,
    database: Knex({
      client: 'pg',
      connection: databaseUrl,
      ...knexSnakeCaseMappers(),
    }),
  };
}
