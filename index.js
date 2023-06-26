const commonConfig = require('./lib/common')

module.exports = commonConfig({
  extends: [
    'airbnb-base',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
})
