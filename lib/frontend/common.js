const common = require('../common');

const commonFrontend = common({
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
  },
  plugins: [
    'babel',
  ],
  rules: {
    'babel/no-unused-expressions': 'error',

    'import/no-commonjs': 'error',
    'import/extensions': 'off',
    'import/no-amd': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    'no-unused-expressions': 'off',
  },
});
module.exports = (config) => {
  config.parser = commonFrontend.parser;
  config.parserOptions = {
    ...commonFrontend.parserOptions,
    ...config.parserOptions,
  };
  config.plugins = [
    ...commonFrontend.plugins,
    ...(config.plugins || []),
  ];
  config.extends = [
    ...commonFrontend.extends,
    ...(config.extends || []),
  ];
  config.plugins = [
    ...commonFrontend.plugins,
    ...(config.plugins || []),
  ];
  config.env = {
    ...commonFrontend.env,
    ...config.env,
  };
  config.rules = {
    ...commonFrontend.rules,
    ...config.rules,
  };
  config.overrides = [
    ...commonFrontend.overrides,
    ...(config.overrides || []),
  ];
  return config;
};
