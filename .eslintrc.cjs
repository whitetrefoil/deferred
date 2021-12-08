/* eslint-env node */

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,

  parserOptions: {
    project        : './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  extends: [
    '@whitetrefoil/eslint-config/with-type',
  ],

  overrides: [
    {
      files: ['scripts/**/*.js'],
      env  : { node: true },
      rules: {
        'no-console': 0,
      },
    },
  ],
}
