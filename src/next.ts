import { defineConfig } from "oxlint"
import react from "./react.ts"

export default defineConfig({
  ...react,
  plugins: [...react.plugins, "nextjs", "react-perf"],
  rules: {
    ...react.rules,
  },
})
