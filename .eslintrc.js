/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
  root: true,
  env: {
    jest: false,
    browser: true,
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
  rules: { "prettier/prettier": "error" },
  ignorePatterns: ['.eslintrc.js', 'postcss.config.js', '.prettierrc.js', 'next.config.js'],
}