const common = require('./common');

module.exports = common({
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.jsx', '.tsx'],
    }],
  },
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      rules: {
        'react/prop-types': 'off', // there is no need for PropTypes when using Typescript
      },
    },
  ],
});
