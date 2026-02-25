# @byscripts/eslint-config

Shared ESLint flat config for JavaScript, TypeScript, and Vue 3 projects.

## Install

### Vue 3 + TypeScript (full config)

```bash
pnpm add -D @byscripts/eslint-config jiti eslint eslint-plugin-vue @vue/eslint-config-typescript
```

```js
// eslint.config.js
import { vue } from "@byscripts/eslint-config/vue";

export default vue;
```

### TypeScript only

```bash
pnpm add -D @byscripts/eslint-config jiti eslint
```

```js
// eslint.config.js
import { typescript } from "@byscripts/eslint-config/typescript";

export default typescript;
```

### JavaScript only

```bash
pnpm add -D @byscripts/eslint-config eslint
```

```js
// eslint.config.js
import { javascript } from "@byscripts/eslint-config/javascript";

export default javascript;
```

## Notes

- Uses ESLint flat config (`defineConfig` from `eslint/config`, available since ESLint 9.22)
- Peer dependency: `eslint ^9.22.0`
- Vue-related dependencies (`eslint-plugin-vue`, `@vue/eslint-config-typescript`, `@byscripts/eslint-plugin`) are optional peer dependencies, only needed when using the Vue config
