import type { Linter, Rule } from "eslint";

type AttributeOrder = Record<string, string[]>;

const DEFAULT_ORDER: AttributeOrder = {
  script: ["lang", "setup"],
  style: ["lang", "scoped"],
};

const rule: Rule.RuleModule = {
  meta: {
    type: "layout",
    fixable: "code",
    schema: [
      {
        type: "object",
        additionalProperties: {
          type: "array",
          items: { type: "string" },
        },
      },
    ],
    messages: {
      wrongOrder: "Attributes on <{{tag}}> should follow order: {{expected}}.",
    },
  },
  create(context) {
    if (!context.filename.endsWith(".vue")) {
      return {};
    }

    const attributeOrder: AttributeOrder = {
      ...DEFAULT_ORDER,
      ...(context.options[0] as AttributeOrder),
    };

    const { parserServices } = context.sourceCode;

    const documentFragment = parserServices.getDocumentFragment?.();

    if (!documentFragment) {
      return {};
    }

    return {
      Program() {
        for (const child of documentFragment.children) {
          if (child.type !== "VElement") {
            continue;
          }

          const expectedOrder = attributeOrder[child.name];

          if (!expectedOrder) {
            continue;
          }

          const attributes = child.startTag.attributes.filter(
            (a: Record<string, unknown>) =>
              a.type === "VAttribute" && !a.directive,
          );

          const attributeNames: string[] = attributes.map(
            (a: Record<string, Record<string, unknown>>) => a.key.name,
          );

          const relevantNames = attributeNames.filter((n) =>
            expectedOrder.includes(n),
          );

          const expectedNames = expectedOrder.filter((n) =>
            relevantNames.includes(n),
          );

          if (relevantNames.every((name, i) => name === expectedNames[i])) {
            continue;
          }

          const sourceCode = context.sourceCode;

          context.report({
            loc: child.startTag.loc,
            messageId: "wrongOrder",
            data: { tag: child.name, expected: expectedNames.join(", ") },
            fix(fixer) {
              const sorted = [...attributes].sort((attributeA, attributeB) => {
                const attributeAIndex = expectedOrder.indexOf(
                  attributeA.key.name,
                );

                const attributeBIndex = expectedOrder.indexOf(
                  attributeB.key.name,
                );

                return (
                  (attributeAIndex === -1 ? 999 : attributeAIndex) -
                  (attributeBIndex === -1 ? 999 : attributeBIndex)
                );
              });

              const newText = sorted
                .map((a) => sourceCode.getText(a))
                .join(" ");

              const firstAttribute = attributes[0];

              const lastAttribute = attributes[attributes.length - 1];

              return fixer.replaceTextRange(
                [firstAttribute.range[0], lastAttribute.range[1]],
                newText,
              );
            },
          });
        }
      },
    };
  },
};

export default {
  plugins: {
    byscripts: {
      rules: {
        "vue-block-attribute-order": rule,
      },
    },
  },
  rules: {
    "byscripts/vue-block-attribute-order": "error",
  },
} satisfies Linter.Config;
