import type { ESLint, Linter } from "eslint";

import { noCrossAppRoutes } from "./no-cross-app-routes.js";
import { vueBlockAttributeOrder } from "./vue-block-attribute-order.js";

const plugin = {
  rules: {
    "no-cross-app-routes": noCrossAppRoutes,
    "vue-block-attribute-order": vueBlockAttributeOrder,
  },
} satisfies ESLint.Plugin;

const configs = {
  "no-cross-app-routes": {
    plugins: { byscripts: plugin },
    rules: { "byscripts/no-cross-app-routes": "error" },
  },
  "vue-block-attribute-order": {
    plugins: { byscripts: plugin },
    rules: { "byscripts/vue-block-attribute-order": "error" },
  },
} satisfies Record<string, Linter.Config>;

const byscriptsPlugin = {
  ...plugin,
  configs,
};

export default byscriptsPlugin;
