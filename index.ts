import { defineConfig, Config } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import perfectionist from "eslint-plugin-perfectionist";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const config = defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  jsxA11y.flatConfigs.recommended,
  reactHooks.configs.flat["recommended-latest"],
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  perfectionist.configs?.["recommended-natural"] as Config,
  eslintConfigPrettier,
  {
    rules: {
      "react/jsx-curly-brace-presence": ["warn", "never"],
    },
  }
);

export default config;
