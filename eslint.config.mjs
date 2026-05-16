import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const layerOverrides = [
  {
    files: ["data/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*", "@/components/*"],
              message: "data/ must stay presentation-free and cannot depend on app/ or components/."
            }
          ]
        }
      ]
    },
  },
  {
    files: ["lib/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*", "@/components/*"],
              message: "lib/ is infrastructure-only and cannot depend on app/ or components/."
            }
          ]
        }
      ]
    }
  }
];

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  ...layerOverrides,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ]),
]);
