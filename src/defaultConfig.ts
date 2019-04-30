import Knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import AppConfig from './AppConfig';
import {
  isTest,
  DATABASE_URL,
  TEST_DATABASE_URL,
  PORT,
  TEST_PORT,
} from './env';

export default function defaultConfig(): AppConfig {
  const port = parseInt(isTest ? TEST_PORT : PORT, 10);
  const databaseUrl = isTest ? TEST_DATABASE_URL : DATABASE_URL;

  return {
    port,
    database: Knex({
      client: 'pg',
      connection: databaseUrl,
      ...knexSnakeCaseMappers(),
    }),
  };
}
