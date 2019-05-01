import App from './App';
import defaultConfig from './defaultConfig';
import env from './env';

if (env.NODE_ENV !== 'test') {
  throw new Error(`NODE_ENV must equal 'test' during tests.`);
}

/**
 * Test app instance. Do not use outside of tests!
 */
const app = new App(defaultConfig());

beforeAll(async () => {
  await app.listen();
});

afterAll(async () => {
  if (app) {
    await app.stop();
  }
});

export default app;
