import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import ts from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier";

/**
 *
 * @param {{
 *  scope:string[];
 *  tsConfigPath:string;
 * }} params
 * @returns
 */
export const createConfig = (params) => {
  return [
    { ...js.configs.recommended, name: "js/recommended" },
    { ...jsxA11y.flatConfigs.recommended, name: "jsx-a11y/recommended" },
    {
      ...react.configs.flat.recommended,
      name: "react/recommended",
      rules: {
        ...react.configs.flat.recommended.rules,
        "react/jsx-curly-brace-presence": ["warn", "never"],
      },
    },
    {
      plugins: { "react-hooks": reactHooks },
      rules: reactHooks.configs.recommended.rules,
      name: "react-hooks/recommended",
    },
    {
      ...perfectionist.configs["recommended-alphabetical"],
      name: "perfectionist/recommended",
    },
    ...[ts.configs.recommendedTypeChecked, ts.configs.stylisticTypeChecked]
      .flat()
      .map((config) => ({
        ...config,
        languageOptions: {
          ...config.languageOptions,
          parserOptions: { project: params.tsConfigPath },
        },
      })),
    { ...prettier, name: "prettier" },
  ].map((config) => ({ ...config, files: params.scope }));
};

export default createConfig({
  tsConfigPath: "tsconfig.app.json",
  scope: ["**/*.ts", "**/*.tsx"],
});
