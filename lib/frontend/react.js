const common = require('./common')

module.exports = common({
  plugins: [
    'react-redux',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-redux/recommended',
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
})
