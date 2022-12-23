const common = require('../common');

module.exports = (config) => common({
  env: {
    browser: true,
    ...config.env || [],
  },
  plugins: [
    'babel',
    ...config.plugins || [],
  ],
  extends: [
    'plugin:wc/recommended',
    ...config.extends || [],
  ],
  rules: {
    'babel/no-unused-expressions': 'error',

    'import/no-commonjs': 'error',
    'import/extensions': 'off',
    'import/no-amd': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    'no-unused-expressions': 'off',

    ...config.rules || [],
  },
  overrides: [
    ...config.overrides || [],
  ],
});
