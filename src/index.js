import { createRequire } from "module";

const require = createRequire(import.meta.url);

import config from "./config.js";

const { ApolloServer } = require("apollo-server");
const { ApolloGateway, RemoteGraphQLDataSource } = require("@apollo/gateway");

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    // pass the authorization token from the context to underlying services
    // as a header called "Authorization"
    if (context.authorizationToken) {
      request.http.headers.set('Authorization', context.authorizationToken);
    }
  }
}

async function main () {
  if (!config.SERVICES.length) {
    // TODO: logger
    console.warn("No services registered.");
  }

  const gateway = new ApolloGateway({
    serviceList: config.SERVICES,
    buildService({ url }) {
      return new AuthenticatedDataSource({ url });
    },
    debug: true
  });

  const server = new ApolloServer({
    gateway,
    subscriptions: false,
    context: ({ req }) => {
      const authorizationToken = req.headers.authorization || null;
      return { authorizationToken };
    }
  });

  const { url } = await server.listen({ port: 2000 });
  console.log(`🚀 Server ready at ${url}`);
}

main();
