# eslint-config-react-app-essentials

Modern flat ESLint config for React + TypeScript apps.
Includes accessibility rules, type-aware linting, import sorting, and Prettier compatibility — all with minimal setup.

> Powered by [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new). Requires ESLint ≥ 8.21.0.

---

## Features

- ESLint recommended base (`@eslint/js`)
- Type-aware linting with `@typescript-eslint`
- React & JSX runtime support
- React Hooks best practices
- Accessibility via `eslint-plugin-jsx-a11y`
- Auto-sorted imports and JSX props via `eslint-plugin-perfectionist`
- Compatible with Prettier (`eslint-config-prettier`)
- Designed for **flat config**
- type-safe with TypeScript

---

## Installation

```bash
pnpm add -D eslint-config-react-app-essentials
```

---

## Usage

Create your `eslint.config.js`:

```js
// eslint.config.js

// @ts-check
import { defineConfig } from "eslint-config-react-app-essentials";

export default defineConfig({
  tsconfigRootDir: "./tsconfig.json",
  scope: ["src/**/*.{ts,tsx}"],
});
```

Then lint your code:

```bash
npx eslint .
```

---

## Customization

You can extend or override rules with the `extends` parameter:

```js
import { defineConfig } from "eslint-config-react-app-essentials";
import reactCompiler from "eslint-plugin-react-compiler";

export default defineConfig({
  tsconfigRootDir: "./tsconfig.json",
  scope: ["src/**/*"],
  extends: [
    reactCompiler.configs.recommended,
    {
      rules: {
        "react/jsx-curly-brace-presence": "off",
      },
    },
  ],
});
```

---

## 📘 Notes

- Requires `tsconfig.json` for type-aware linting

---

## 🪪 License

ISC
