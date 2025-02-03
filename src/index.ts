import { ServerApp } from "./views/server-app";


(async () => {
  await main();
})();


async function main() {
  ServerApp.run()
}