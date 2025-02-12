module.exports = {
  plugins: [
    'promise',
    'import',
    'sonarjs',
    'optimize-regex',
  ],
  extends: [
    'airbnb-base',
    'plugin:import-esm/recommended',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:sonarjs/recommended-legacy',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
  ],
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

    semi: ['error', 'never'],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
}
