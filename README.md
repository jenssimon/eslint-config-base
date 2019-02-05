[![NPM version](https://badgen.net/npm/v/@jenssimon/eslint-config-base)](https://www.npmjs.com/package/@jenssimon/eslint-config-base) [![Downloads](https://badgen.net/npm/dt/@jenssimon/eslint-config-base)](https://www.npmjs.com/package/@jenssimon/eslint-config-base) ![Dependencies](https://badgen.net/david/dep/jenssimon/eslint-config-base) ![peerDependencies](https://badgen.net/david/peer/jenssimon/eslint-config-base) ![devDependencies](https://badgen.net/david/dev/jenssimon/eslint-config-base) [![star this repo](https://badgen.net/github/stars/jenssimon/eslint-config-base)](https://github.com/jenssimon/eslint-config-base) [![fork this repo](https://badgen.net/github/forks/jenssimon/eslint-config-base)](https://github.com/jenssimon/eslint-config-base) ![Code Style](https://badgen.net/badge/code%20style/airbnb/f2a)

# eslint-config-base

> A collection of shareable ESLint configurations for both client and server side code

## Installation

```sh
$ yarn add @jenssimon/eslint-config-base
```

## General

All configurations are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme).

Additionally:

- line length 120 characters
- disallow usage of Lodash/Underscore ([eslint-plugin-you-dont-need-lodash-underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#readme))
- apply rules for eslint comments [eslint-plugin-eslint-comments]https://github.com/mysticatea/eslint-plugin-eslint-comments#readme))
- apply rules of promises ([eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise#readme)).

## Configurations

### Base configuration

Suitable for server side Node.js code. Based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#eslint-config-airbnb-base).

```json
{
  "extends": [
    "@jenssimon/base"
  ]
}
```

### Frontend Standard

Standard rules for frontend code (without React/JSX). Enforces ES2015+ code without jQuery. Based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#readme).

```json
{
  "extends": [
    "@jenssimon/base/frontend"
  ]
}
```

### Frontend Modern

Rules for frontend code that typically uses React. Like the standard frontend rules it enforces ES2015+ code. Based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#readme).

```json
{
  "extends": [
    "@jenssimon/base/frontend/modern"
  ]
}
```

## License

MIT © 2019 [Jens Simon](https://github.com/jenssimon)
