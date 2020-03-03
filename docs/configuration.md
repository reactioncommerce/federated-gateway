# Federated Gateway: Configuration

All Reaction Commerce services follow the twelve-factor app methodology, including storing the configuration with the environment. We keep our configuration in the service's root directory in a `.env` file.

**Never commit your `.env` file to git**

## Table of Contents
  TODO: add variables
- [Variables](#variables)
  - [REACTION_LOG_LEVEL](#reaction_log_level)
  - [SERVICES](#services)
- [Validation](#validation)
- [Further Reading](#further-reading)

## Variables

The `.env` file is where we keep all the variables about the environment, and any custom variables your service might need. Run the `bin/setup` command from the project's root directory to create an `.env` file with default variables for local development.

**In a deployed environment, you will need to set correct values for every variable listed here or the service will not start. They are all required.**

[Back to Top][top]

### REACTION_LOG_LEVEL

Log level for the [Reaction Logger](https://github.com/reactioncommerce/logger).

### SERVICES

Services that you would like running on your Gateway.

The following services are currently capable of joining the Federated Gateway:

- [Reaction API][reaction]

```json
{ "name": "api", "url": "http://api.reaction.localhost:3000/graphql" }
```

- [Pricing Engine][pricing-engine]

```json
{ "name": "pricing", "url": "http://pricing.reaction.localhost:8888" }
```

- [Reaction Authorization][reaction-authorization]

```json
{ "name": "authorization", "url": "http://authorization.reaction.localhost:6000" }
```

[Back to Top][top]

## Validation

Federated Gateway uses [envalid](https://github.com/af/envalid) to validate environment variables. Validation happens in `/src/config.js` and provides a validated `config` object.

[Back to Top][top]

## Further Reading

- [Specification](specification.md)
- [API Documentation](api.md)
- [Deployment](deployment.md)
- [Testing](testing.md)

[Back to Top][top]

[top]: #federated-gateway-configuration
[reaction]: https://github.com/reactioncommerce/reaction
[pricing-engine]: https://github.com/reactioncommerce/pricing-engine
[reaction-authorization]: https://github.com/reactioncommerce/reaction-authorization
