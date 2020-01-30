# Federated Gateway: API

TODO: add description

## Table of Contents
- [Types](#types)
  - [Policy](#policy)
  - [inputs](#inputs)
  - [enums](#enums)
  - [scalar](#scalar)
- [Queries](#queries)
  - [healthcheck](#healthcheck)
- [Mutations](#mutations)
- [Further Reading](#further-reading)

## Types
Before we cover the API operations we need to talk about a few GQL types defined by this service.
TODO: add types description

[Back to Top][top]

### Policy

TODO: add policy summary

### inputs

TODO: add inputs
<!-- - `PolicyInput`: Policy information to be sent to service. -->

[Back to Top][top]

### enums

TODO: add enums if any

[Back to Top][top]

### scalar

TODO: add scalars if any

[Back to Top][top]

## Queries

### healthcheck

Health check query verifies the Federated Gateway service is working.

TODO: update health check query as necessary

```gql
query {
  healthcheck
}
```
If successful this query will return the services health status.
```json
{
  "data": {
    "healthcheck": {
      "status": "ok"
    }
  }
}
```

[Back to Top][top]

## Mutations

TODO: add mutations

[Back to Top][top]

## Further Reading

- [Concepts](concepts.md)
- [Configuration](configuration.md)
- [Specifications](specification.md)

[Back to Top][top]

[top]: #federated-gateway-api
