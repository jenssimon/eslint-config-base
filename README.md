[![NPM version][npm-image]][npm-url] [![Downloads][npm-downloads-image]][npm-url] [![Dependencies][deps-image]][deps-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][travis-image]][travis-url] ![Code Style][codestyle-image]

# eslint-config-base

> A collection of shareable ESLint configurations for both client and server side code

WITH VERSION 4 ALL PLUGINS ARE DEFINED AS DEPENDENCIES (NO PEERDEPENDENCIES ANYMORE). YOU CAN REMOVE THE PLUGINS FROM YOUR PROJECTS.

⚠️⚠️⚠️ VERSION 3 STOPS SUPPORT FOR `frontend/legacy` CONFIGURATION. CHECKS FOR JQUERY OR UNDERSCORE/LODASH ARE REMOVED. WE ARE IN 2020 AND WE DON'T HAVE TO CARE ABOUT SUCH THINGS. ADDITIONALLY THE `frontend/modern` CONFIG WAS RENAMED TO `frontend/react`. ⚠️⚠️⚠️

## Installation

```sh
$ yarn add @jenssimon/eslint-config-base
$ npx install-peerdeps --dev @jenssimon/eslint-config-base
```

## General

All configurations are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme).

Additionally:

- line length 120 characters
- apply rules for eslint comments ([eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments#readme))
- apply rules of promises ([eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise#readme)).
- apply SonarJS rules ([eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs#readme))

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

### Frontend React

Rules for frontend code that typically uses React. Like the standard frontend rules it enforces ES2015+ code. Based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#readme).

```json
{
  "extends": [
    "@jenssimon/base/frontend-react"
  ]
}
```

## License

MIT © 2020 [Jens Simon](https://github.com/jenssimon)

[npm-url]: https://www.npmjs.com/package/@jenssimon/eslint-config-base
[npm-image]: https://badgen.net/npm/v/@jenssimon/eslint-config-base
[npm-downloads-image]: https://badgen.net/npm/dw/@jenssimon/eslint-config-base

[deps-url]: https://david-dm.org/jenssimon/eslint-config-base
[deps-image]: https://badgen.net/david/dep/jenssimon/eslint-config-base

[gh-url]: https://github.com/jenssimon/eslint-config-base
[gh-stars-image]: https://badgen.net/github/stars/jenssimon/eslint-config-base
[gh-forks-image]: https://badgen.net/github/forks/jenssimon/eslint-config-base

[travis-url]: https://travis-ci.com/jenssimon/eslint-config-base
[travis-image]: https://travis-ci.com/jenssimon/eslint-config-base.svg?branch=master

[codestyle-image]: https://badgen.net/badge/code%20style/airbnb/f2a
