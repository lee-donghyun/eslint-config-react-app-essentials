import eslint from "@eslint/js";
import tseslint, { ConfigArray } from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import perfectionist from "eslint-plugin-perfectionist";

export const defineConfig = (params: { tsConfigPath: string }): ConfigArray => {
  return tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    jsxA11y.flatConfigs.recommended,
    reactHooks.configs["recommended-latest"],
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    perfectionist.configs["recommended-alphabetical"],
    eslintConfigPrettier,
    {
      rules: {
        "react/jsx-curly-brace-presence": ["warn", "never"],
        "perfectionist/sort-imports": [
          "error",
          { tsconfigRootDir: params.tsConfigPath },
        ],
      },
    }
  );
};

const defaultConfig: ConfigArray = defineConfig({
  tsConfigPath: "./tsconfig.app.json",
});

export default defaultConfig;
