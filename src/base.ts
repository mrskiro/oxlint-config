import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "import"],
  rules: {
    "oxc/no-barrel-file": ["error", { threshold: 1 }],
  },
})
