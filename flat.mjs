import Js from "@eslint/js";
import Ts from "typescript-eslint";
import React from "eslint-plugin-react";
import ReactHooks from "eslint-plugin-react-hooks";
import Prettier from "eslint-config-prettier";
import SimpleImportSort from "eslint-plugin-simple-import-sort";

const js = Js.configs.recommended;

const ts = Ts.config(
  ...Ts.configs.recommendedTypeChecked,
  ...Ts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  }
);

const react = [
  {
    plugins: { react: React },
    rules: {
      ...React.configs.recommended.rules,
      ...React.configs["jsx-runtime"].rules,
      "react/jsx-curly-brace-presence": ["warn", "never"],
      "react/jsx-sort-props": [
        "warn",
        {
          shorthandFirst: true,
          multiline: "last",
          reservedFirst: true,
        },
      ],
    },
    settings: { react: { version: "detect" } },
  },
];

const reactHooks = {
  ...ReactHooks.configs.recommended,
  plugins: { "react-hooks": ReactHooks },
};

const prettier = Prettier;

const sort = {
  name: "sort",
  plugins: { sort: SimpleImportSort },
  rules: {
    "sort/imports": "warn",
    "sort/exports": "warn",
  },
};

const defaultFiles = [{ files: ["src/**/*.ts", "src/**/*.tsx"] }];

export default [js, ts, react, reactHooks, prettier, sort, defaultFiles].flat();
