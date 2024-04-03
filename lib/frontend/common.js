const common = require('../common')

const config = ({
  env,
  plugins,
  extends: ext,
  rules,
  overrides,
}) => common({
  env: {
    browser: true,
    ...env || [],
  },
  plugins: [
    'babel',
    ...plugins || [],
  ],
  extends: [
    'plugin:wc/recommended',
    ...ext || [],
  ],
  rules: {
    'babel/no-unused-expressions': 'error',

    'import/no-commonjs': 'error',
    'import/extensions': 'off',
    'import/no-amd': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    'no-unused-expressions': 'off',

    ...rules || [],
  },
  overrides,
})

module.exports = config
