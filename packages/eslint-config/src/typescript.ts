import { defineConfig } from "eslint/config";
import tsEslint from "typescript-eslint";
import javascriptConfig from "./javascript.js";

export default defineConfig(
  javascriptConfig,
  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,
);
