# eslint-config-react-app-essentials

A comprehensive ESLint flat config for React applications with TypeScript support.

## Features

- ESLint 9 flat config format
- TypeScript strict type checking
- React & React Hooks best practices
- JSX accessibility (a11y) rules
- Import/export sorting with Perfectionist
- Prettier compatible

## Installation

```bash
pnpm add -D eslint eslint-config-react-app-essentials
```

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import config from "eslint-config-react-app-essentials";

const typescript = [
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

const react = [
  {
    settings: {
      react: { version: "detect" },
    },
  },
];

export default [
  ...config.concat(typescript, react).map((c) => ({
    ...c,
    files: ["src/**/*.{ts,tsx}"],
  })),
];
```

### Advanced Usage

You can create different configurations for different parts of your project:

```javascript
import config from "eslint-config-react-app-essentials";

const app = config;
const tests = config;
const node = config;

const typescript = [
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

const react = [
  {
    settings: {
      react: { version: "detect" },
    },
  },
];

export default [
  ...app
    .concat(typescript, react)
    .map((c) => ({ ...c, files: ["src/**/*.{ts,tsx}"] })),
  ...tests
    .concat(typescript, react)
    .map((c) => ({ ...c, files: ["tests/**/*.ts"] })),
  ...node
    .concat(typescript, react)
    .map((c) => ({ ...c, files: ["*.ts", "*.tsx"] })),
];
```

## Included Configurations

This config extends the following rulesets:

| Plugin                                                                               | Configuration                               |
| ------------------------------------------------------------------------------------ | ------------------------------------------- |
| [@eslint/js](https://www.npmjs.com/package/@eslint/js)                               | `recommended`                               |
| [typescript-eslint](https://typescript-eslint.io/)                                   | `strictTypeChecked`, `stylisticTypeChecked` |
| [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)       | `recommended`                               |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | `recommended-latest`                        |
| [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)             | `recommended`, `jsx-runtime`                |
| [eslint-plugin-perfectionist](https://perfectionist.dev/)                            | `recommended-natural`                       |
| [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)         | -                                           |

## Additional Rules

- `react/jsx-curly-brace-presence`: Warns when unnecessary curly braces are used in JSX

## Requirements

- ESLint >= 9.26.0
- Node.js >= 18

## License

ISC
