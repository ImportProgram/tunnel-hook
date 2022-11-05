const localtunnel = require('localtunnel');
require('dotenv').config()

const { IncomingWebhook } = require('@slack/webhook');
const url = process.env.URL;

const webhook = new IncomingWebhook(url);

// Send the notification
(async () => {
  const tunnel = await localtunnel({ port: process.env.PORT, local_host: process.env.DOCKER.toLowerCase() == "true" ? "host.docker.internal" : "localhost" });
  console.log(`[tunnel-hook] Binding to ${tunnel.url} for port ${process.env.PORT}`);

  (async () => {
    await webhook.send({
      text: `${tunnel.url}`,
    });
  })();
  tunnel.on('close', () => {
    //Should restart the app at this point
  });
})();

