import js from '@eslint/js'
import { configs as airbnbConfigs, plugins } from 'eslint-config-airbnb-extended'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
import pluginPromise from 'eslint-plugin-promise'
import importEsmPlugin from 'eslint-plugin-import-esm'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'


const jsConfig = [
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  plugins.stylistic,
  plugins.importX,
  ...airbnbConfigs.base.recommended,

  eslintPluginUnicorn.configs.recommended,
  sonarjs.configs.recommended,
  pluginPromise.configs['flat/recommended'],
  ...importEsmPlugin.configs.recommended,
  comments.recommended,
]


const nodeConfig = [
  plugins.node,
  ...airbnbConfigs.node.recommended,
]


export const configs = {
  base: [
    ...jsConfig,

    {
      rules: {
        'dot-location': ['error', 'property'],

        '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
        '@eslint-community/eslint-comments/no-unused-disable': 'error',

        'func-names': 'off',

        'import-x/extensions': 'off',
        'import-x/no-unresolved': 'off',
        'import-x/order': [
          'error', {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'always-and-inside-groups',
          },
        ],

        'linebreak-style': 'off',
        'max-len': ['error', 120],
        'no-nested-ternary': 'off', // important for usage with unicorn/no-nested-ternary
        'no-param-reassign': ['error', { props: false }],
        'no-plusplus': 'off',
        'no-use-before-define': ['error', { functions: false }],

        'unicorn/better-regex': 'warn',

        'promise/always-return': 'off',
        'promise/catch-or-return': 'off',

        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',

        '@stylistic/max-len': ['error', 120],
        '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
        '@stylistic/semi': ['error', 'never'],

        'import-x/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
      },
    },
  ],
  node: [
    ...nodeConfig,
  ],
}
