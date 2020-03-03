# Federated Gateway: Adding a Service to the Gateway

## Table of Contents

TODO: add sections
- [Section](#section)
- [Further Reading](#further-reading)

## Section

TODO: update section name and add description


> To be part of a federated graph, an implementing service must conform to the Apollo Federation specification, which exposes the service's capabilities to the gateway, as well as to tools like Apollo Graph Manager.
- Apollo Gateway Docs


The first step to adding a service to the gateway to to convert it's existing schema into an implementing service.

1. Install Apollo Federation

```sh
npm install @apollo/federation
```

2. Build your federated schema when you create ApolloServer in your service:

In javascript:
```js
const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});
```
In clojure:
```java
(defn load-schema
  [resolver-map]
  (as-> "reaction/pricing/schema.graphql" $
        (io/resource $)
        (slurp $)
        (federation/build-federated-schema $ {})
        (util/attach-resolvers $ resolver-map)
        (schema/compile (merge-with into $ metadata-schema))))
        ```

See more at https://www.apollographql.com/docs/apollo-server/federation/implementing/

[Back to Top][top]

## Further Reading

- [API Documentation](api.md)
- [Configuration](configuration.md)
- [Specification](specification.md)
- [Testing](testing.md)
- [Deployment](deployment.md)

[Back to Top][top]

[top]: #federated-gateway-concepts
