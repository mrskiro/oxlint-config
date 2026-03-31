const noUseEffect = {
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === "Identifier" && node.callee.name === "useEffect") {
          context.report({
            message:
              "useEffect is for syncing with external systems only. Do not use it for event handlers or data transformations. https://ja.react.dev/learn/you-might-not-need-an-effect",
            node,
          });
        }
      },
    };
  },
};

const noUseRef = {
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === "Identifier" && node.callee.name === "useRef") {
          context.report({
            message:
              "useRef is for DOM references only. Do not use it to mirror state or work around stale closures. https://ja.react.dev/learn/referencing-values-with-refs",
            node,
          });
        }
      },
    };
  },
};

const VARIANT_PREFIXES = ["data", "group", "peer", "aria", "has", "not"];

const noTailwindArbitraryValue = {
  create(context) {
    const isVariantPattern = (prefix) =>
      VARIANT_PREFIXES.some((v) => prefix === v || prefix.endsWith("-" + v));

    const checkValue = (node, value) => {
      const re = /([\w-]+)-\[([^\]]+)\]/g;
      let match;
      while ((match = re.exec(value)) !== null) {
        if (isVariantPattern(match[1])) continue;
        context.report({
          node,
          message: `Tailwind arbitrary value '${match[0]}' found. Prefer a standard utility class or define a design token (e.g. CSS custom property / theme variable). If this is a one-off value, disable this rule with oxlint-disable-next-line.`,
        });
      }
    };

    return {
      JSXAttribute(node) {
        const name = node.name?.name;
        if (name !== "className" && name !== "class") return;

        if (node.value?.type === "Literal" && typeof node.value.value === "string") {
          checkValue(node.value, node.value.value);
        }
      },
      CallExpression(node) {
        const callee = node.callee;
        const name = callee.type === "Identifier" ? callee.name : null;
        if (name !== "cn" && name !== "clsx" && name !== "twMerge") return;

        for (const arg of node.arguments) {
          if (arg.type === "Literal" && typeof arg.value === "string") {
            checkValue(arg, arg.value);
          }
          if (arg.type === "TemplateLiteral") {
            for (const quasi of arg.quasis) {
              checkValue(arg, quasi.value.raw);
            }
          }
        }
      },
      TemplateLiteral(node) {
        const parent = node.parent;
        if (
          parent?.type === "JSXExpressionContainer" &&
          parent.parent?.type === "JSXAttribute" &&
          (parent.parent.name?.name === "className" || parent.parent.name?.name === "class")
        ) {
          for (const quasi of node.quasis) {
            checkValue(node, quasi.value.raw);
          }
        }
      },
    };
  },
};

const plugin = {
  meta: { name: "@mrskiro/oxlint-rules" },
  rules: {
    "no-use-effect": noUseEffect,
    "no-use-ref": noUseRef,
    "no-tailwind-arbitrary-value": noTailwindArbitraryValue,
  },
};

export default plugin;
