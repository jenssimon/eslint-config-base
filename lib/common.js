const common = {
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'promise',
    'import',
    'optimize-regex',
  ],
  rules: {
    'dot-location': ['error', 'property'],
    'eslint-comments/no-unused-disable': 'error',
    'func-names': 'off',
    'import/order': [
      'error',
      {
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
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'optimize-regex/optimize-regex': 'warn',
    'promise/always-return': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'off',
    'promise/no-native': 'off',
    'promise/no-nesting': 'off',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',

    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',

    // disabled rules needs some check in the future
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};

module.exports = (config) => {
  config.extends = [
    ...common.extends,
    ...(config.extends || []),
  ];
  config.plugins = [
    ...common.plugins,
    ...(config.plugins || []),
  ];
  config.rules = {
    ...common.rules,
    ...config.rules,
  };
  config.overrides = [
    {
      files: [
        '**/*.test.*',
        '**/__tests__/**',
        '**/__mocks__/**',
      ],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ];
  return config;
};
