const common = require('./common');

module.exports = common({
  extends: [
    'airbnb-base/legacy',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'dollar-sign/dollar-sign': ['error', 'ignoreProperties'],
    'global-require': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-amd': 'error',
    'import/first': ['error', 'absolute-first'],
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/no-restricted-paths': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'no-restricted-globals': 'off',
  },
});
