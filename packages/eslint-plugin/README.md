# @byscripts/eslint-plugin

Custom ESLint rules for Vue 3 projects.

## Rules

| Rule                                  | Description                                                 | Fixable |
| ------------------------------------- | ----------------------------------------------------------- | ------- |
| `byscripts/vue-block-attribute-order` | Enforces attribute order on `<script>` and `<style>` blocks | Yes     |

### `vue-block-attribute-order`

Default order:

- `<script>`: `lang`, `setup`
- `<style>`: `lang`, `scoped`

Custom order via rule options:

```js
"byscripts/vue-block-attribute-order": ["error", {
  script: ["setup", "lang"],
  style: ["scoped", "lang"],
}]
```

## Install

```bash
pnpm add -D @byscripts/eslint-plugin eslint
```

```js
// eslint.config.js
import vueBlockAttributeOrder from "@byscripts/eslint-plugin/vue-block-attribute-order";

export default [...yourOtherRules, vueBlockAttributeOrder];
```

## Notes

- Peer dependency: `eslint ^9.22.0 || ^10.0.0`
- Requires `vue-eslint-parser` in the consumer project (for `parserServices.getDocumentFragment()`)
