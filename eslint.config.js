import path from 'node:path'

import { includeIgnoreFile } from '@eslint/compat'

import { configs } from './index.js'


const gitignorePath = path.resolve('.', '.gitignore')


export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      '.yarn/',
    ],
  },

  ...configs.base,
  ...configs.node,

  {
    files: [
      'index.js',
    ],
    rules: {
      'import-x/prefer-default-export': 'off',
    },
  },

  {
    files: [
      'eslint.config.js',
    ],
    rules: {
      'import-x/no-useless-path-segments': 'off',
    },
  },
]
