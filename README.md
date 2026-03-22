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

## License

MIT
