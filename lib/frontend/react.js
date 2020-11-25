const common = require('./common');

module.exports = common({
  plugins: [
    'react-hooks',
  ],
  extends: [
    'airbnb',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
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
