# Federated Gateway: Implementing a Service on the Gateway

*Full documentation can be found in the [Apollo Federation Implementation docs](https://www.apollographql.com/docs/apollo-server/federation/implementing/). Below are key points taken from their docs, integrated with Reaction specific information.*

> Apollo Server provides libraries for acting both as an implementing service and as a gateway, but these components can be implemented in any language and framework.

## Table of Contents

- [Introduction](#introduction)
- [Adding a service written in Javascript](#javascript)
- [Adding a service written in Clojure](#clojure)
- [Further Reading](#further-reading)

## Introduction

> To be part of a federated graph, an implementing service must conform to the Apollo Federation specification, which exposes the service's capabilities to the gateway.

The first step to adding a service to the gateway to to convert it's existing schema into an implementing service.

### Javascript

1. Install Apollo Federation

```sh
npm install @apollo/federation
```

2. Build your federated schema when you create ApolloServer in your service:

```js
const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});
```

### Clojure (TODO)

```clojure
(defn load-schema
  [resolver-map]
  (as-> "reaction/pricing/schema.graphql" $
        (io/resource $)
        (slurp $)
        (federation/build-federated-schema $ {})
        (util/attach-resolvers $ resolver-map)
        (schema/compile (merge-with into $ metadata-schema))))
```

[Back to Top][top]

## Further Reading

- [API Documentation](api.md)
- [Configuration](configuration.md)
- [Specification](specification.md)
- [Testing](testing.md)
- [Deployment](deployment.md)

[Back to Top][top]

[top]: #federated-gateway-implementing-a-service-on-the-gateway
