import react from "./react.js"

export default {
  ...react,
  plugins: [...react.plugins, "nextjs", "react-perf"],
  rules: {
    ...react.rules,
  },
  overrides: [
    ...(react.overrides ?? []),
    {
      files: [
        "**/page.tsx",
        "**/layout.tsx",
        "**/loading.tsx",
        "**/error.tsx",
        "**/not-found.tsx",
        "**/sitemap.ts",
        "**/middleware.ts",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
}
