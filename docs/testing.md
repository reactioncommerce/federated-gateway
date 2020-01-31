# Federated Gateway: Testing
Federated Gateway uses [eslint](https://eslint.org/docs/user-guide/getting-started) for static analysis and code formatting, [jest](https://jestjs.io/docs/en/getting-started.html) as a testing framework and [faker](https://github.com/marak/Faker.js/) to build dummy data.

## Table of Contents
- [Quick Start](#quick-start)
- [Static Analysis](#static-analysis)
- [Testing Utilities](#testing-utilities)
  - [Test App](#test-app)
  - [Dummy Factory](#dummy-factory)
- [Unit Test](#unit-test)
- [Integration Test](#integration-test)
- [Further Reading](#further-reading)

## Quick Start

```sh
npm test
```
or inside Docker

```sh
docker-compose run --rm federated-gateway npm test
```
<!-- TODO: example of running test in watch mode, will require a refactor of package.json scripts. -->

[Back to Top][top]

## Static Analysis
Federated Gateway uses eslint along with [reaction-eslint-config](https://github.com/reactioncommerce/reaction-eslint-config) for static code analysis. Static analysis validates the code conforms to the [coding styleguide](https://docs.reactioncommerce.com/docs/styleguide). Run static code analysis with `npm run lint`, or `docker-compose run --rm federated-gateway npm run lint` to run it inside of the Docker container. To fix simple formatting issues run `npm run lint:fix` or `docker-compose run --rm federated-gateway npm run lint:fix`.

[Back to Top][top]

## Testing Utilities

TODO

[Back to Top][top]

### Test App

TODO

[Back to Top][top]

### Dummy Factory

TODO

[Back to Top][top]

## Unit Test

TODO

[Back to Top][top]

## Integration Test

TODO

[Back to Top][top]

## Further Reading

- [Specifications](specification.md)
- [API Documentation](api.md)
- [Deployment](deployment.md)
- [Reaction Commerce Testing Documentation](https://docs.reactioncommerce.com/docs/testing-reaction)

[Back to Top][top]

[top]: #federated-gateway-testing
