import { createRequire } from "module";

const require = createRequire(import.meta.url);

import config from "./config.js";

const { ApolloServer, AuthenticationError } = require("apollo-server");
const { createApolloFetch } = require("apollo-fetch");
const { ApolloGateway, RemoteGraphQLDataSource } = require("@apollo/gateway");

// check Gateway level permissions
const checkAuthorization = async (route) => {
  const fetch = createApolloFetch({
    uri: config.AUTHORIZATION_URL
  });

  const { data: { isAuthorized } } = await fetch({
    query: `query isAuthorized($action: String, $resource: String, $subject: String) {
      isAuthorized(input: { action: $action, resource: $resource, subject: $subject })
    }`,
    variables: { action: "read", resource: `reaction:federation:route:${route}` },
  });

  return isAuthorized;
}

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  async willSendRequest({ request, context }) {
    const route = request.http.url.replace(/(^\w+:|^)\/\//, '').split(".").splice(0, 1).join(); // TODO: this probably isn't the best way to do this

    const isAuthorized = await checkAuthorization(route);

    // if this was a user initiated request,
    // the user must be authorized to use the Gateway
    if (context.requestInitiated && !isAuthorized) {
      throw new AuthenticationError("Gateway access denied");
    }

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
      return {
        authorizationToken,
        // requestInitiated tells `willSendRequest` that this was a user initiated request,
        // not just a service request like startup or ping,
        // and authorization / access needs to be checked
        requestInitiated: true
      };
    }
  });

  const { url } = await server.listen({ port: 2000 });
  console.log(`🚀 Server ready at ${url}`);
}

main();
