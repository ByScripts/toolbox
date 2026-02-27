import vueBlockAttributeOrder from "@byscripts/eslint-plugin/vue-block-attribute-order";
import typescriptConfig from "./typescript.js";
import pluginVue from "eslint-plugin-vue";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{vue,ts,mts,tsx}"],
  },
  typescriptConfig,
  pluginVue.configs["flat/recommended-error"],
  vueTsConfigs.recommended,
  vueBlockAttributeOrder,
  {
    rules: {
      "vue/block-order": ["error", { order: ["script", "template", "style"] }],
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" },
          style: { lang: "postcss" },
        },
      ],
      "vue/block-tag-newline": [
        "error",
        {
          singleline: "consistent",
          multiline: "always",
          maxEmptyLines: 0,
        },
      ],
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        { registeredComponentsOnly: false },
      ],
      "vue/custom-event-name-casing": ["error", "camelCase"],
      "vue/define-emits-declaration": ["error", "type-literal"],
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineOptions", "defineProps", "defineEmits", "defineModel", "defineSlots"],
          defineExposeLast: true,
        },
      ],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/define-props-destructuring": ["error", { destructure: "only-when-assigned" }],
      "vue/enforce-style-attribute": ["error", { allow: ["scoped", "module"] }],
      "vue/html-button-has-type": "error",
      "vue/html-comment-content-newline": [
        "error",
        {
          singleline: "never",
          multiline: "always",
        },
      ],
      "vue/html-comment-content-spacing": ["error", "always"],
      "vue/html-comment-indent": ["error", 2],
      "vue/max-props": ["error", { maxProps: 5 }],
      "vue/max-template-depth": ["error", { maxDepth: 7 }],
      "vue/next-tick-style": ["error", "promise"],
      // Enable if using I18n
      // "vue/no-bare-strings-in-template": "error",
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/no-duplicate-class-names": "error",
      "vue/no-empty-component-block": "error",
      "vue/no-import-compiler-macros": "error",
      "vue/no-literals-in-template": "error",
      "vue/no-multiple-objects-in-class": "error",
      "vue/no-negated-v-if-condition": "error",
      "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-static-inline-styles": "error",
      "vue/no-template-target-blank": "error",
      "vue/no-undef-components": [
        "error",
        { ignorePatterns: ["RouterLink", "RouterView", "I18nT"] },
      ],
      "vue/no-undef-directives": "error",
      "vue/no-undef-properties": "error",
      "vue/no-unused-emit-declarations": "error",
      "vue/no-unused-refs": "error",
      "vue/no-use-v-else-with-v-for": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/no-v-text": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/prefer-define-options": "error",
      "vue/prefer-separate-static-class": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/prefer-use-template-ref": "error",
      "vue/require-explicit-slots": "error",
      "vue/require-macro-variable-name": "error",
      "vue/require-typed-object-prop": "error",
      "vue/require-typed-ref": "error",
      "vue/slot-name-casing": ["error", "kebab-case"],
      "vue/static-class-names-order": "error",
      "vue/v-for-delimiter-style": ["error", "of"],
      "vue/v-on-handler-style": ["error", ["method", "inline-function"]],
      "vue/require-default-prop": "off",
    },
  },
  {
    files: ["*/pages/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
);
