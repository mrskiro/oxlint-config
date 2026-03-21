import { defineConfig } from "oxlint"
import base from "./base.ts"

export default defineConfig({
  ...base,
  plugins: [...base.plugins, "react", "jsx-a11y"],
  rules: {
    ...base.rules,
  },
})
