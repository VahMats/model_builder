const {
  rules: airbnbRules,
} = require("eslint-config-airbnb-typescript/lib/shared");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    RequestInit: "readonly",
  },
  plugins: ["react", "@emotion", "@typescript-eslint", "simple-import-sort"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "react/button-has-type": 0,
    "@emotion/jsx-import": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    curly: ["error", "all"],
    "func-style": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          ...airbnbRules["import/no-extraneous-dependencies"][1]
            .devDependencies,
          "config/**/*",
          "src/utils/test/**/*",
          "src/setupTests.ts",
          "cypress/**/*",
          "cypress.config.ts",
          "dangerfile.ts",
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Packages. `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          [
            "^(|@assets|@ui-component|@config|@context|@hooks|@types|@utils)(/.*|$)",
          ],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "block-like", next: "block-like" },
      { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-param-reassign": 0,
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      { controlComponents: ["InputStyled"] },
    ],
  },
};
