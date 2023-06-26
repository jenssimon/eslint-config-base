[![NPM version][npm-image]][npm-url] [![Downloads][npm-downloads-image]][npm-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][gh-status-image]][gh-url]

# eslint-config-base

> A collection of shareable ESLint configurations for both client and server side code

## Installation

```sh
$ yarn add @jenssimon/eslint-config-base --dev
```

## General

All configurations are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme).

Additionally:

- line length 120 characters
- no semicolons
- apply rules for eslint comments ([eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments#readme))
- apply rules of promises ([eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise#readme)).
- apply SonarJS rules ([eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs#readme))

> **Note:**
>
> If you don't trust ASI and still want to use semicolons:
>
> ```json
> {
>   "extends": [
>     "@jenssimon/base",
>   ]
>   "rules": {
>     "semi": ["error", "always"]
>   }
> }
> ```

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

### Frontend Lit

Rules for frontend code that uses Lit. Like the standard frontend rules it enforces ES2015+ code. Based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#readme).

```json
{
  "extends": [
    "@jenssimon/base/frontend-lit"
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

MIT © 2022 [Jens Simon](https://github.com/jenssimon)

[npm-url]: https://www.npmjs.com/package/@jenssimon/eslint-config-base
[npm-image]: https://badgen.net/npm/v/@jenssimon/eslint-config-base
[npm-downloads-image]: https://badgen.net/npm/dw/@jenssimon/eslint-config-base

[gh-url]: https://github.com/jenssimon/eslint-config-base
[gh-stars-image]: https://badgen.net/github/stars/jenssimon/eslint-config-base
[gh-forks-image]: https://badgen.net/github/forks/jenssimon/eslint-config-base
[gh-status-image]: https://badgen.net/github/status/jenssimon/eslint-config-base
