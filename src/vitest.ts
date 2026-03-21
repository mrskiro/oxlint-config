import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["vitest"],
  rules: {
    "vitest/consistent-test-it": ["error", { fn: "it", withinDescribe: "it" }],
  },
})
