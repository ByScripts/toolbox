# @byscripts/toolbox

Monorepo for shared development tools and configurations.

## Packages

| Package | Description |
|---------|-------------|
| [@byscripts/eslint-config](packages/eslint-config) | Shared ESLint configuration for Vue 3 + TypeScript projects |
| [@byscripts/eslint-plugin](packages/eslint-plugin) | Custom ESLint rules |

## Publishing

Packages are automatically published to npm when pushing to `main`. Bump the `version` in the relevant `package.json` files before pushing — only packages with a new version will be published.

## Development

```bash
pnpm install
pnpm build
```

## License

MIT
