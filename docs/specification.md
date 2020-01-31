# Federated Gateway: Specifications

## Table of Contents
- [Environment](#environment)
- [Dependencies](#dependencies)
- [Kafka](#kafka)
  - [Consumers](#consumers)
- [API](#api)
- [Observability](#observability)
  - [Logger](#logger)
  - [Healthcheck](#healthcheck)
- [Further Reading](#further-reading)

## Environment

All Reaction Commerce services use [Docker][docker] and [Docker Compose][docker-compose] with a `.env` file to store environment configuration. We use Docker Compose to create containers.

TODO: add other services
- `Federated Gateway`: A container for this node service.

[Back to Top][top]

## Dependencies

TODO: add dependencies

[Back to Top][top]

## Kafka

TODO: add Kafka details

### Consumers

TODO:  add details about Kafka consumers

[Back to Top][top]

## API

TODO: add API details

[Back to Top][top]

## Observability
Federated Gateway offers two ways to get insight to the performance and status of the running service: logs and health check endpoints.

[Back to Top][top]

### Logger
This service uses [Reaction Logger](https://github.com/reactioncommerce/logger) to log information about what's going on within the service. Logger settings can be configured in the `.env` file (see [configuration variables](configuration.md#variables)).

[Back to Top][top]

### Healthcheck
This service provides a `healthcheck` GraphQL mutation that can be called to verify that the gateway service is running.

[Back to Top][top]

## Further Reading

- [Configuration](configuration.md)
- [Concepts](concepts.md)
- [API Documentation](api.md)
- [Testing](testing.md)
- [Deployment](deployment.md)
- [Reaction Platform][platform]

[Back to Top][top]

[top]: #federated-gateway-specifications
[docker]: https://www.docker.com/get-started
[docker-compose]: https://docs.docker.com/compose/install/
[platform]: https://github.com/reactioncommerce/reaction-platform
