import base from "./base.js"

export default {
  ...base,
  plugins: [...base.plugins, "react", "jsx-a11y"],
  rules: {
    ...base.rules,
  },
}
