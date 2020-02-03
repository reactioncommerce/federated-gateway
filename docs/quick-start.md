# Federated Gateway: Quick Start

This article explains how to run the Reaction Federated Gateway service locally for developing or testing. If you want to deploy the service to your Reaction installation, refer to the [Deployment](deployment.md) article instead.

## Table of Contents
- [Prerequisite](#prerequisite)
- [Setup](#setup)
  - [With Reaction Platform](#with-reaction-platform)
  - [With Docker Compose](#with-docker-compose)
- [Up & Running](#up--running)
- [Service Policy Registration](#service-policy-registration)
- [Endpoints](#endpoints)
- [Command Cheatsheet](#command-cheatsheet)
- [Next Steps](#next-steps)

## Prerequisite
Federated Gateway is just a single service in a larger e-commerce ecosystem that Reaction is creating. The easiest way to get up and running with the entire Reaction system is to use the [Reaction Platform][platform]. We'll cover how to set it up with and without the Platform, but know the Platform is the preferred way to run the entire Reaction system locally.

_You'll need at least the following._
* [Git][git]
* [Docker][docker]
* [Docker Compose][docker-compose]
* A [GitHub][github] account with a [configured SSH key][github-keys]

[Back to Top][top]

## Setup
Before we cover how to set up and run the service, let's briefly touch on what the [Apollo Federation][apollo-federation] is and its relationship to Federated Gateway. TODO: add details

### With Reaction Platform
TODO: add instructions on getting started with the Reaction Platform

[Back to Top][top]

### With Docker Compose
Start by cloning the Federated Gateway repository.

```sh
git clone git@github.com:reactioncommerce/federated-gateway.git
```

Create any networks that you have not already created:

```sh
docker network create federation.reaction.localhost
```

All Reaction Commerce services use [Docker][docker] and [Docker Compose][docker-compose] with a `.env` file to store environment configuration. If running outside of the Reaction Platform, create an `.env` file for a project by running `bin/setup` in that project's root directory.

_**NEVER** commit the `.env` file to git._

Start our Federated Gateway service. We'll change into Federated Gateway's root directory, create a `.env` and start its Docker containers using `docker-compose`.

```sh
cd federated-gateway
bin/setup
docker-compose up
```

The initial download and build of these Docker artifacts can take a few minutes depending on your internet connection and host machine.

[Back to Top][top]

## Up & Running
Start this service by building and running the Docker containers using the Docker Compose `up` command.

```sh
docker-compose up
```
TODO: add URL where service will be running

[Back to Top][top]

## Endpoints

TODO: add endpoint URL

[Back to Top][top]

## Command Cheatsheet

- Start containers: `docker-compose up`
- Stop containers: `docker-compose stop`
- Rebuild containers: `docker-compose up --build`
- Remove containers (deletes data!): `docker-compose down`
- View container logs: `docker-compose logs -f`
- Run linter: `docker-compose run --rm federated-gateway npm run lint`
- Run test: `docker-compose run --rm federated-gateway npm test`
- Run (same as `docker-compose up`): `docker-compose run --rm --service-ports --use-aliases federated-gateway npm run start:debug`
- Run in debug mode: `docker-compose run --rm --service-ports --use-aliases federated-gateway npm run start:debug`
- Run in watch mode: `docker-compose run --rm --service-ports --use-aliases federated-gateway npm run watch`
- Run in watch and debug mode: `docker-compose run --rm --service-ports --use-aliases federated-gateway npm run watch:debug`

[Back to Top][top]

## Next Steps

- [Configuration](configuration.md)
- [Concepts](concepts.md)
- [API Documentation](api.md)
- [Testing](testing.md)
- [Deployment](deployment.md)

[Back to Top][top]

[top]: #Federated-gateway-quick-start
[reaction]: https://github.com/reactioncommerce/reaction
[platform]: https://github.com/reactioncommerce/reaction-platform
[apollo-federation]: https://www.apollographql.com/docs/apollo-server/federation/introduction
[git]: https://git-scm.com/
[docker]: https://www.docker.com/get-started
[docker-compose]: https://docs.docker.com/compose/install/
[github]: https://github.com/
[github-keys]: https://github.com/settings/keys
