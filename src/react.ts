import { defineConfig } from "oxlint"
import base from "./base.ts"

export default defineConfig({
  ...base,
  plugins: [...base.plugins, "react", "jsx-a11y"],
  rules: {
    ...base.rules,

    // react
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/rules-of-hooks": "error",
    "react/self-closing-comp": "error",
    "react/display-name": "error",
  },
})
