import axios from "axios";
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

    // figure out what it means to be a 2nd-3rd-4th request
    // do we need to call super?

    // check user permission before doing anything in the gateway
    console.log(" ----- ----- ----- we are checking permissions here");
    const isAuthorized = false;
    if (!isAuthorized) {
      console.log(" --------------------------------- inside the if block");

      throw Error("oh snap an error");

    }
    console.log(" --------------------------- post checking permissions");

  }

}

async function main () {
  if (!config.SERVICES.length) {
    // TODO: logger
    console.warn("No services registered.");
  }

  const response = await axios.get("http://api.reaction.localhost:3000/.well-known/apollo/server-health");

  console.log(" -------- axios response", response);


  const gateway = new ApolloGateway({
    serviceList: config.SERVICES,
    buildService({ url }) {
      // check health status of
      // do somethign with Map.set here?
      // /curl --head http://localhost:3000/.well-known/apollo/server-health

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
