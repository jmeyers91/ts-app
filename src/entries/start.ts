/**
 * Start the app and listen for requests.
 */

import App from '../App';
import defaultConfig from '../defaultConfig';

main();
async function main() {
  const app = new App(defaultConfig());
  await app.listen();
  console.log(`Listening on port ${app.config.port}`);
}
