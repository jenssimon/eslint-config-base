const common = require('../common');

const commonFrontend = common({
  parser: 'babel-eslint',
  plugins: [
    'dollar-sign',
    'jquery',
    'you-dont-need-lodash-underscore',
  ],
  env: {
    browser: true,
  },
  rules: {
    'dollar-sign/dollar-sign': ['error', 'ignoreProperties'],
    'import/extensions': 'off',
    'import/no-amd': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'you-dont-need-lodash-underscore/concat': 'error',
    'you-dont-need-lodash-underscore/fill': 'error',
    'you-dont-need-lodash-underscore/find': 'error',
    'you-dont-need-lodash-underscore/detect': 'error',
    'you-dont-need-lodash-underscore/find-index': 'error',
    'you-dont-need-lodash-underscore/index-of': 'error',
    'you-dont-need-lodash-underscore/join': 'error',
    'you-dont-need-lodash-underscore/last-index-of': 'error',
    'you-dont-need-lodash-underscore/reverse': 'error',
    'you-dont-need-lodash-underscore/each': 'error',
    'you-dont-need-lodash-underscore/for-each': 'error',
    'you-dont-need-lodash-underscore/every': 'error',
    'you-dont-need-lodash-underscore/all': 'error',
    'you-dont-need-lodash-underscore/filter': 'error',
    'you-dont-need-lodash-underscore/select': 'error',
    'you-dont-need-lodash-underscore/includes': 'error',
    'you-dont-need-lodash-underscore/contains': 'error',
    'you-dont-need-lodash-underscore/map': 'error',
    'you-dont-need-lodash-underscore/collect': 'error',
    'you-dont-need-lodash-underscore/reduce': 'error',
    'you-dont-need-lodash-underscore/inject': 'error',
    'you-dont-need-lodash-underscore/foldl': 'error',
    'you-dont-need-lodash-underscore/reduce-right': 'error',
    'you-dont-need-lodash-underscore/foldr': 'error',
    'you-dont-need-lodash-underscore/size': 'error',
    'you-dont-need-lodash-underscore/some': 'error',
    'you-dont-need-lodash-underscore/any': 'error',
    'you-dont-need-lodash-underscore/is-nan': 'error',
    'you-dont-need-lodash-underscore/extend-own': 'error',
    'you-dont-need-lodash-underscore/assign': 'error',
    'you-dont-need-lodash-underscore/keys': 'error',
    'you-dont-need-lodash-underscore/repeat': 'error',
    'you-dont-need-lodash-underscore/to-lower': 'error',
    'you-dont-need-lodash-underscore/to-upper': 'error',
    'you-dont-need-lodash-underscore/trim': 'error',
  },
});
module.exports = (config) => {
  config.parser = commonFrontend.parser;
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
    ...(config.env || {}),
  };
  config.rules = {
    ...commonFrontend.rules,
    ...(config.rules || {}),
  };
  config.overrides = [
    ...commonFrontend.overrides,
    ...(config.overrides || []),
  ];
  return config;
};
