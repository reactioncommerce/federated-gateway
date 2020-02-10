import { createRequire } from "module";

const require = createRequire(import.meta.url);

import config from "./config.js";

const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

async function main () {
  if (!config.SERVICES.length) {
    // TODO: logger
    console.warn("No services registered.");
  }

  const gateway = new ApolloGateway({
    serviceList: config.SERVICES
  });

  const server = new ApolloServer({
    gateway,
    subscriptions: false
  });

  const { url } = await server.listen({ port: 2000 });
  console.log(`🚀 Server ready at ${url}`);
}

main();
