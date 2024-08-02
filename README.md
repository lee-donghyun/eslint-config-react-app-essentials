# eslint-config-react-app-essentials

## Description

This configuration enforces consistency in the codebase, ensuring uniformity regardless of the developer writing the code. It includes the following rules:

- Integration with Prettier
- Sorting of ESModule imports
- Sorting of JSX props

### Installation

```sh
npm install -D eslint eslint-config-react-app-essentials
```

### Usage

Add the following configuration to your ESLint configuration file:

```tsx
// eslint.config.mjs
import { createConfig } from "eslint-config-react-app-essentials";

export default createConfig({
    scope: ["src/**/*.ts","src/**/*.tsx"],
    tsConfigPath: "tsconfig.app.json",
})
```

Now, your code will adhere to consistent formatting and structure, promoting readability and maintainability across your project.
