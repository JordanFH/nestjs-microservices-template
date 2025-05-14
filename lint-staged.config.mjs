const config = {
  "**/*.{ts?(x),mts}": () => "tsc -p tsconfig.prod.json --noEmit",
  "*.{js,jsx,mjs,cjs,ts,tsx,mts}": [
    "prettier --write",
    "pnpm run lint:file",
    "vitest related --run",
  ],
  "*.{md,json}": "prettier --write",
  "*.{yml,yaml}": "pnpm run lint:yaml",
  // "*": "pnpm run typos",
};

export default config;
