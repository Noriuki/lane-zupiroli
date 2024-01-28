/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
  env: {
    browser: true,
    jest: false // true if needed
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "prettier/prettier": "error",
  },
}