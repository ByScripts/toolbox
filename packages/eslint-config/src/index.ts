import { defineConfig } from "eslint/config";
import byscriptsPlugins from "@byscripts/eslint-plugin";

export default defineConfig([
  {
    plugins: {
      byscripts: {
        rules: {
          "vue-block-attribute-order": byscriptsPlugins.blockAttributeOrder,
        },
      },
    },
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
          order: [
            "defineOptions",
            "defineProps",
            "defineEmits",
            "defineModel",
            "defineSlots",
          ],
          defineExposeLast: true,
        },
      ],
      "vue/define-props-declaration": ["error", "type-based"],
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
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/no-empty-component-block": "error",
      "vue/no-multiple-objects-in-class": "error",
      "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-static-inline-styles": "error",
      "vue/no-template-target-blank": "error",
      "vue/no-undef-components": [
        "error",
        { ignorePatterns: ["RouterLink", "RouterView", "I18nT"] },
      ],
      "vue/no-undef-properties": "error",
      "vue/no-unused-refs": "error",
      "vue/no-use-v-else-with-v-for": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/no-v-text": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/prefer-define-options": "error",
      "vue/prefer-separate-static-class": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/require-macro-variable-name": "error",
      "vue/valid-define-options": "error",
      "byscripts/vue-block-attribute-order": "error",
    },
  },
]);
