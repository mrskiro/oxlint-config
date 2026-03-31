export default {
  plugins: ["typescript", "unicorn", "oxc", "import"],
  rules: {
    "oxc/no-barrel-file": ["error", { threshold: 1 }],
    "typescript/no-explicit-any": "error",
    "typescript/consistent-type-definitions": ["error", "type"],
    "import/no-default-export": "error",
    "func-style": ["error", "expression"],
  },
  overrides: [
    {
      files: ["**/*.config.{ts,mjs,js}"],
      rules: {
        "import/no-default-export": "off",
        "func-style": "off",
      },
    },
  ],
}
