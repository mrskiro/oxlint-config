# @mrskiro/oxlint-config

Shared oxlint configuration for my projects.

## Install

```sh
pnpm add -D oxlint @mrskiro/oxlint-config
```

## Usage

Configs are composable. Pick what you need:

| Export | Plugins |
|--------|---------|
| `@mrskiro/oxlint-config/base` | typescript, unicorn, oxc, import |
| `@mrskiro/oxlint-config/react` | + react, jsx-a11y |
| `@mrskiro/oxlint-config/next` | + nextjs, react-perf |
| `@mrskiro/oxlint-config/vitest` | vitest |

`react` extends `base`, `next` extends `react`. `vitest` is standalone.

### Example: Next.js + Vitest

```ts
// oxlint.config.ts
import next from "@mrskiro/oxlint-config/next";
import vitest from "@mrskiro/oxlint-config/vitest";
import { defineConfig } from "oxlint";

export default defineConfig({
  ...next,
  plugins: [...next.plugins, ...vitest.plugins],
  rules: {
    ...next.rules,
    ...vitest.rules,
  },
});
```

### Example: React only

```ts
// oxlint.config.ts
import react from "@mrskiro/oxlint-config/react";
import { defineConfig } from "oxlint";

export default defineConfig(react);
```

## Release

1. Update `version` in `package.json`
2. Commit, tag, and push:

```sh
git add package.json && git commit -m "vX.Y.Z" && git tag vX.Y.Z && git push origin main --tags
```

GitHub Actions will automatically publish to npm.

## License

MIT
