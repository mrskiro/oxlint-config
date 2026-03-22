import react from "./react.js"

export default {
  ...react,
  plugins: [...react.plugins, "nextjs", "react-perf"],
  rules: {
    ...react.rules,
  },
}
