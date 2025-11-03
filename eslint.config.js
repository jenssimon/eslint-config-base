import path from 'node:path'

import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import { includeIgnoreFile } from '@eslint/compat'

import { configs, plugins } from 'eslint-config-airbnb-extended'

import { configs as eslintConfigs } from './index.js'


const gitignorePath = path.resolve('.', '.gitignore')


const jsConfig = [
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  plugins.stylistic,
  plugins.importX,
  ...configs.base.recommended,
]

const nodeConfig = [
  plugins.node,
  ...configs.node.recommended,
]


export default defineConfig(
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      '.yarn/',
    ],
  },

  jsConfig,
  nodeConfig,

  eslintConfigs.base,

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
)
