module.exports = {
  env: {
    browser: false,  // Specifies that the code is not running in a browser environment
    es6: true,       // Enables ES6 syntax
    jest: true,      // Enables Jest-related globals for testing
  },
  extends: [
    'airbnb-base',         // Extends Airbnb's base JavaScript style guide
    'plugin:jest/all',     // Adds Jest-specific linting rules
  ],
  globals: {
    Atomics: 'readonly',      // Specifies Atomics as a global variable (read-only)
    SharedArrayBuffer: 'readonly',  // Specifies SharedArrayBuffer as a global variable (read-only)
  },
  parserOptions: {
    ecmaVersion: 2018,       // Allows parsing of ECMAScript 2018 features
    sourceType: 'module',    // Allows the use of ES6 modules (import/export)
  },
  plugins: ['jest'],        // Adds Jest plugin for linting Jest-related rules
  rules: {
    'no-console': 'off',     // Allows the use of `console` statements
    'no-shadow': 'off',      // Disables the no-shadow rule (which disallows variable shadowing)
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',     // Disallows labeled statements
      'WithStatement',        // Disallows the `with` statement
    ],
  },
  overrides: [
    {
      files: ['*.js'],               // Apply these rules only to `.js` files
      excludedFiles: 'babel.config.js',  // Excludes the Babel config file from the ESLint rules
    },
  ],
};
