[![NPM version][npm-image]][npm-url] [![Downloads][npm-downloads-image]][npm-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][gh-status-image]][gh-status-url]

# eslint-config-base

> A shared ESLint configuration

## Installation

```sh
yarn add --dev @jenssimon/eslint-config-base
```

```sh
npm install @jenssimon/eslint-config-base --save-dev
```

## General

Based on the [ESLint AirBnB Extended](https://eslint-airbnb-extended.nishargshah.dev/).

Additionally:

- line length 120 characters
- no semicolons
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs#readme)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise#readme)
- [eslint-plugin-eslint-comments](https://eslint-community.github.io/eslint-plugin-eslint-comments/)

> **Note**
>
> This configuration is flat config only.
>
> If you need `eslintrc` support please use a version < 9 of this lint configuration.

## Configuration

```js
import path from 'node:path'

import { includeIgnoreFile } from '@eslint/compat'

import { configs } from '@jenssimon/eslint-config-base'


const gitignorePath = path.resolve('.', '.gitignore')


export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      '.yarn/',
    ],
  },

  ...configs.base,

  // for Node.js environments
  ...configs.node,
]
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
