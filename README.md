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

This configuration defaults to [ignore the whole directory, except for the `src` directory](https://github.com/lee-donghyun/eslint-config-react-app-essentials/blob/9068bea7c31b5c4e862ac7f49a569311413801d4/flat.mjs#L58). If you want to lint a `custom-directory`, you can add the following configuration:

```js
export default [...essentails, { ignores: ["!custom-directoy"] }];
```
