import App from '../App';
import defaultConfig from '../defaultConfig';
import { isTest } from '../env';

main();
async function main() {
  console.time('done');
  if (isTest) {
    console.log('Running test migrations');
  } else {
    console.log('Running migrations');
  }

  const app = new App(defaultConfig());
  const migrationNames = await app.migrate();
  if (migrationNames.length > 0) {
    console.log(migrationNames.join('\n'));
  } else {
    console.log('Database is up to date.');
  }
  console.timeEnd('done');

  await app.stop();
}
