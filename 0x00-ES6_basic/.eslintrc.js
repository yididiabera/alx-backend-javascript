module.exports = {
  env: {
    browser: false,    // Set to false since this is backend code
    es6: true,
    jest: true,        // Enable Jest environment for tests
  },
  extends: [
    'airbnb-base',     // Use Airbnb's base style guide
    'plugin:jest/all', // Add Jest plugin for linting Jest-specific rules
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',  // Allow `console.log`
    'no-shadow': 'off',   // Disable variable shadowing rules
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
