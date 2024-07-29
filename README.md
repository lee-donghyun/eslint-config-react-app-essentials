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

```js
// eslint.config.js
import essentails from "eslint-config-react-app-essentials";

export default [...essentails];
```

Now, your code will adhere to consistent formatting and structure, promoting readability and maintainability across your project.

### Configuration

#### directory

This configuration defaults to lint all ts and tsx files. If you want to ignore a directory, you can add the following configuration:

```js
export default [...essentails, { files: ["lib/router2/*.ts"] }];
```
