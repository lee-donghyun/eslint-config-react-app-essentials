modeule.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: ["simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/jsx-curly-brace-presence": ["warn", "never"],
    "react/jsx-sort-props": [
      "warn",
      {
        shorthandFirst: true,
        multiline: "last",
        reservedFirst: true,
      },
    ],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};
