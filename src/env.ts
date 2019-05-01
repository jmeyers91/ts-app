import dotenv from 'dotenv';

dotenv.config();

/**
 * `process.env` with defaults loaded from the `.env` file if it exists.
 */
const env = process.env;
export default env;

/**
 * Is the app running in a test environment.
 * If true, the test database and port variables will be used.
 */
export const isTest = env.NODE_ENV === 'test';

/**
 * Is the app running in a development environment.
 */
export const isDev = env.NODE_ENV === 'development';

/**
 * Is the app running in a production environment.
 */
export const isProd = env.NODE_ENV === 'production';

if (!env.DATABASE_URL) {
  throw new Error('Missing required env variable: DATABASE_URL');
}

if (isTest && !env.TEST_DATABASE_URL) {
  throw new Error('Missing required env variable: TEST_DATABASE_URL');
}

if (isProd && !env.PORT) {
  throw new Error('Missing required env variable: PORT');
}

/**
 * Port the API server should listen on.
 * Defaults to 8080.
 */
export const PORT = env.PORT || '8080';

/**
 * Port the API server should listen on during tests.
 * Defaults to 8081
 */
export const TEST_PORT = env.TEST_PORT || '8081';

/**
 * PostgreSQL database URL for storing models.
 */
export const DATABASE_URL = env.DATABASE_URL;

/**
 * PostgreSQL database URL for storing models in tests.
 */
export const TEST_DATABASE_URL = env.TEST_DATABASE_URL;
