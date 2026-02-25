import { defineBuildConfig } from "obuild/config";

export default defineBuildConfig({
  entries: [
    { type: "bundle", input: "src/javascript.ts" },
    { type: "bundle", input: "src/typescript.ts" },
    { type: "bundle", input: "src/vue.ts" },
  ],
});
