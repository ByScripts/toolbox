import type { ESLint, Linter, Rule } from "eslint";

const DEFAULT_APPS_DIR = "src/apps";

function isNameProperty(node: Rule.Node | null): boolean {
  if (node?.type !== "Property") {
    return false;
  }

  const { key } = node;

  return (
    (key.type === "Identifier" && key.name === "name") ||
    (key.type === "Literal" && key.value === "name")
  );
}

export const noCrossAppRoutes: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow referencing routes that belong to another app",
      recommended: true,
    },
    schema: [
      {
        type: "object",
        properties: {
          appsDir: {
            type: "string",
            description: `Directory containing the apps (default: "${DEFAULT_APPS_DIR}")`,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      forbidden:
        'Route "{{ route }}" belongs to another app. Only routes starting with "/{{ app }}/" are allowed here.',
    },
  },
  create(context) {
    const appsDir = (context.options[0]?.appsDir ?? DEFAULT_APPS_DIR).replace(
      /\/$/,
      "",
    );
    const escapedAppsDir = appsDir.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = context.filename.match(
      new RegExp(`${escapedAppsDir}/([\\w-]+)/`),
    );

    if (!match) {
      return {};
    }

    const currentApp = match[1];

    function check(node: Rule.Node & { value: unknown }): void {
      if (typeof node.value !== "string") {
        return;
      }

      if (!node.value.startsWith("/")) {
        return;
      }

      if (!isNameProperty(node.parent)) {
        return;
      }

      if (!node.value.startsWith(`/${currentApp}/`)) {
        context.report({
          node,
          messageId: "forbidden",
          data: { route: node.value, app: currentApp },
        });
      }
    }

    // Script + Template visitors for .vue files
    const services = context.sourceCode.parserServices;

    if (services?.defineTemplateBodyVisitor) {
      return services.defineTemplateBodyVisitor(
        { Literal: check },
        { Literal: check },
      );
    }

    // Fallback for .ts files
    return { Literal: check };
  },
};

const plugin: ESLint.Plugin = {
  rules: { "no-cross-app-routes": noCrossAppRoutes },
};

const config: Linter.Config = {
  plugins: { byscripts: plugin },
  rules: { "byscripts/no-cross-app-routes": "error" },
};

export default config;
