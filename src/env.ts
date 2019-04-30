import dotenv from 'dotenv';

dotenv.config();
const env = process.env;
export default env;

export const isTest = env.NODE_ENV === 'test';
export const isDev = env.NODE_ENV === 'development';
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

export const PORT = env.PORT || '8080';

export const TEST_PORT = env.TEST_PORT || '8081';

export const DATABASE_URL = env.DATABASE_URL;

export const TEST_DATABASE_URL = env.TEST_DATABASE_URL;
