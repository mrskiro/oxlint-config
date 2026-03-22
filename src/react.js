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
  rules: {
    ...base.rules,
    "@mrskiro/oxlint-rules/no-use-effect": "error",
    "@mrskiro/oxlint-rules/no-use-ref": "error",
  },
}
