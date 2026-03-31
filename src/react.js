import base from "./base.js"

export default {
  ...base,
  plugins: [...base.plugins, "react", "jsx-a11y"],
  jsPlugins: [
    {
      name: "@mrskiro/oxlint-rules",
      specifier: "@mrskiro/oxlint-config/plugin",
    },
  ],
  overrides: [...(base.overrides ?? [])],
  rules: {
    ...base.rules,
    "@mrskiro/oxlint-rules/no-use-effect": "error",
    "@mrskiro/oxlint-rules/no-use-ref": "error",
    "@mrskiro/oxlint-rules/no-tailwind-arbitrary-value": "error",
  },
}
