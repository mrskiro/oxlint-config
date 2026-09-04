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
      // Next.js file conventions that require a default export.
      // Named-export conventions (route.ts, proxy.ts, instrumentation.ts) are not listed.
      files: [
        // Routing
        "**/page.tsx",
        "**/layout.tsx",
        "**/template.tsx",
        "**/loading.tsx",
        "**/error.tsx",
        "**/global-error.tsx",
        "**/not-found.tsx",
        "**/forbidden.tsx",
        "**/unauthorized.tsx",
        "**/default.tsx",
        // Metadata files
        "**/sitemap.ts",
        "**/robots.ts",
        "**/manifest.ts",
        "**/opengraph-image.tsx",
        "**/twitter-image.tsx",
        "**/icon.tsx",
        "**/apple-icon.tsx",
        // Deprecated in Next.js 16 (renamed to proxy.ts, which uses a named export)
        "**/middleware.ts",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
}
