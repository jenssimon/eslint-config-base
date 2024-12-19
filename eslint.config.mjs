import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'


// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})


const files = [
  '**/*.js',
  '**/*.mjs',
]


export default [
  {
    ignores: [
      '.yarn/',
    ],
  },

  ...fixupConfigRules(compat.config({
    extends: [
      './index.js',
    ],
  })).map((config) => ({
    ...config,
    files,
  })),

  {
    files: [
      'index.js',
    ],
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },

  {
    files: [
      'eslint.config.mjs',
    ],
    rules: {
      'no-underscore-dangle': 'off',
    },
  },
]
