/**
 * Roll back database migrations.
 */

import App from '../App';
import defaultConfig from '../defaultConfig';

main();
async function main() {
  console.time('done');
  console.log('Rolling back database');
  const app = new App(defaultConfig());
  await app.rollback();
  console.timeEnd('done');
  await app.stop();
}
