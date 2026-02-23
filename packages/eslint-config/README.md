# @byscripts/eslint-config

Shared ESLint flat config for Vue 3 + TypeScript projects.

## Install

```bash
pnpm add -D @byscripts/eslint-config eslint
```

The config references rules from `eslint-plugin-vue`, `typescript-eslint`, and `vue-eslint-parser`. These must be available at runtime. In a typical Vue + TypeScript project, they are already installed (via `@vue/eslint-config-typescript`, `eslint-plugin-vue`, etc.). If not, install them explicitly:

```bash
pnpm add -D eslint-plugin-vue typescript-eslint vue-eslint-parser
```

## Usage

```js
// eslint.config.js
import byscriptsConfig from "@byscripts/eslint-config";

export default [
  ...byscriptsConfig,
  // your overrides here
];
```

## Dev

```bash
pnpm build        # compile src/index.ts -> dist/index.mjs + dist/index.d.mts
pnpm publish --access public   # publish to npm (pnpm replaces workspace:* automatically)
```

## Notes

- Built with `tsdown --dts`
- Uses ESLint flat config (`defineConfig` from `eslint/config`, available since ESLint 9.22)
- Peer dependency: `eslint ^9.22.0`
- `@byscripts/eslint-plugin` is a regular dependency (installed automatically)
- `eslint-plugin-vue`, `typescript-eslint`, and `vue-eslint-parser` must be available at runtime (usually already present in Vue + TS projects)
