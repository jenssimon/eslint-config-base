[![NPM version][npm-image]][npm-url] [![Downloads][npm-downloads-image]][npm-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][gh-status-image]][gh-status-url]

# eslint-config-base

> A collection of shareable ESLint configurations for both client and server side code

## Installation

```sh
yarn add @jenssimon/eslint-config-base --dev
```

## General

All configurations are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme).

Additionally:

- line length 120 characters
- no semicolons
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs#readme)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise#readme)
- [eslint-plugin-eslint-comments](https://eslint-community.github.io/eslint-plugin-eslint-comments/)

> **Note**
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

## License

MIT © 2019 [Jens Simon](https://github.com/jenssimon)

[npm-url]: https://www.npmjs.com/package/@jenssimon/eslint-config-base
[npm-image]: https://badgen.net/npm/v/@jenssimon/eslint-config-base
[npm-downloads-image]: https://badgen.net/npm/dw/@jenssimon/eslint-config-base

[gh-url]: https://github.com/jenssimon/eslint-config-base
[gh-status-url]: https://github.com/jenssimon/eslint-config-base/actions/workflows/ci.yml
[gh-stars-image]: https://badgen.net/github/stars/jenssimon/eslint-config-base
[gh-forks-image]: https://badgen.net/github/forks/jenssimon/eslint-config-base
[gh-status-image]: https://github.com/jenssimon/eslint-config-base/actions/workflows/ci.yml/badge.svg
