import { defineConfig } from "eslint/config";
import js from "@eslint/js";

import { globalIgnores } from "eslint/config";

export default defineConfig(
  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),
  js.configs.recommended,
);
