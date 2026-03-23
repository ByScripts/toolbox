import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json" with { type: "json" };

const external = [
  ...Object.keys(packageJson.peerDependencies ?? {}),
];

export default defineConfig({
  build: {
    lib: {
      entry: {
        "vue-block-attribute-order": resolve(
          import.meta.dirname,
          "src/vue-block-attribute-order.ts",
        ),
        "no-cross-app-routes": resolve(
          import.meta.dirname,
          "src/no-cross-app-routes.ts",
        ),
      },
      fileName(_, entryName) {
        return `${entryName}.mjs`;
      },
      formats: ["es"],
    },
    rolldownOptions: {
      external,
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
