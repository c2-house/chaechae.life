import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  ...nextVitals,
  prettier,
  globalIgnores(['.contentlayer/**', '.next/**', 'next-env.d.ts']),
]);
