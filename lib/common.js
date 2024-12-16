const config = ({
  extends: ext,
  plugins,
  env,
  rules,
}) => ({
  extends: [
    'plugin:import-esm/recommended',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:sonarjs/recommended-legacy',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    ...ext || [],
  ],
  plugins: [
    'promise',
    'import',
    'sonarjs',
    'optimize-regex',
    ...plugins || [],
  ],
  env,
  rules: {
    'dot-location': ['error', 'property'],

    '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    '@eslint-community/eslint-comments/no-unused-disable': 'error',

    'func-names': 'off',

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
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
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
    'no-nested-ternary': 'off', // important for usage with unicorn/no-nested-ternary
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false }],

    'optimize-regex/optimize-regex': 'warn',

    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',

    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',

    // disabled rules needs some check in the future
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',

    // disabled rules for unicorn by usage in projects, needs check too
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-export-from': 'off',

    semi: ['error', 'never'],

    ...rules || [],
  },
})

module.exports = config
