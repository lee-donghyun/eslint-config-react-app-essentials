import Js from "@eslint/js";
import Ts from "typescript-eslint";
import React from "eslint-plugin-react";
import ReactHooks from "eslint-plugin-react-hooks";
import Prettier from "eslint-config-prettier";
import SimpleImportSort from "eslint-plugin-simple-import-sort";

const js = Js.configs.recommended;

const ts = Ts.config(
  ...Ts.configs.stylisticTypeChecked,
  ...Ts.configs.stylisticTypeChecked
);

const react = [
  React.configs.recommended,
  React.configs["jsx-runtime"],
  {
    plugins: { react: React },
    rules: {
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
  },
];

const reactHooks = ReactHooks.configs.recommended;

const prettier = Prettier.config;

const sort = {
  nme: "sort",
  plugins: { sort: SimpleImportSort },
  rules: {
    "sort/imports": "warn",
    "sort/exports": "warn",
  },
};

export default [js, ts, react, reactHooks, prettier, sort].flat();
