module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    'cypress/globals': true,
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'standard', 'prettier', 'plugin:cypress/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'cypress'],
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
