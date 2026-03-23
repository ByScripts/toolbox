import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json" with { type: "json" };

const external = [
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
];

export default defineConfig({
  build: {
    lib: {
      entry: {
        javascript: resolve(import.meta.dirname, "src/javascript.ts"),
        typescript: resolve(import.meta.dirname, "src/typescript.ts"),
        vue: resolve(import.meta.dirname, "src/vue.ts"),
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
