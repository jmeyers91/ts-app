/**
 * Run database seeds.
 */

import App from '../App';
import defaultConfig from '../defaultConfig';
import { isTest } from '../env';

main();
async function main() {
  console.time('done');
  const app = new App(defaultConfig());

  if (isTest) {
    console.log('Running test seeds');
  } else {
    console.log('Running seeds');
  }
  await app.seed();
  await app.stop();
  console.timeEnd('done');
}
