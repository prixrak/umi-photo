module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["@typescript-eslint", "react-refresh"],
  rules: {
    "comma-dangle": 0,
    quotes: [
      1,
      "single",
      {
        avoidEscape: true,
      },
    ],
    "no-undef": 2,
    "global-strict": 0,
    "no-extra-semi": 1,
    "no-underscore-dangle": 0,
    "no-console": 1,
    "no-debugger": "warn",
    "no-trailing-spaces": [
      1,
      {
        skipBlankLines: true,
      },
    ],
    "no-unreachable": 1,
    "no-alert": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "off",
    "no-warning-comments": [1, { terms: ["debug"], location: "anywhere" }],
  },
};
