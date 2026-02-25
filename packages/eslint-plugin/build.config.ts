import { defineBuildConfig } from "obuild/config";

export default defineBuildConfig({
  entries: [
    {
      type: "bundle",
      input: "src/vue-block-attribute-order.ts",
    },
  ],
});
