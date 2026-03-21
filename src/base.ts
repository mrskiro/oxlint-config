import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "import"],
  rules: {
    // oxc
    "oxc/no-barrel-file": ["error", { threshold: 1 }],

    // core
    "no-var": "error",
    "prefer-const": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    curly: "error",
    "no-debugger": "error",
    "no-console": "error",
    "no-alert": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-async-promise-executor": "error",
    "no-promise-executor-return": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": "error",
    "no-duplicate-case": "error",
    "no-fallthrough": "error",
    "no-self-assign": "error",
    "no-shadow-restricted-names": "error",
    "no-unused-expressions": "error",
    "no-useless-rename": "error",
    "no-useless-catch": "error",
    "prefer-template": "error",
    "object-shorthand": "error",

    // typescript
    "typescript/no-explicit-any": "error",
    "typescript/no-require-imports": "error",
    "typescript/prefer-optional-chain": "error",
    "typescript/no-non-null-asserted-optional-chain": "error",
    "typescript/no-duplicate-enum-values": "error",
    "typescript/no-unnecessary-type-constraint": "error",
    "typescript/prefer-as-const": "error",

    // import
    "import/no-duplicates": "error",

    // unicorn
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-at": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-structured-clone": "error",
    "unicorn/consistent-function-scoping": "error",
    "unicorn/no-useless-spread": "error",
    "unicorn/no-useless-promise-resolve-reject": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/error-message": "error",
    "unicorn/catch-error-name": "error",
    "unicorn/numeric-separators-style": "error",
  },
})
