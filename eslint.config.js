// module.exports = {
//   extends: 'xx',
//   overrides: [],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: [
//       'tsconfig.json',
//       'tsconfig.node.json',
//       'jest.config.ts',
//       'vite.config.ts',
//       'vitest.setup.ts',
//     ],
//   },
//   globals: {
//     logger: true,
//     __SENTRY__: true,
//     __THEME__: true,
//     __IS_PRODUCTION__: true,
//     __SENTRY__DSN__: true,
//   },
//   rules: {},
// };

// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import configs from 'eslint-config-xx';

export default defineConfig([
  globalIgnores(['dist']),
  ...configs,
  // {
  //   files: ['**/*.{js,jsx}'],
  //   extends: [js.configs.recommended, reactHooks.configs['recommended-latest'], reactRefresh.configs.vite],
  //   languageOptions: {
  //     ecmaVersion: 2020,
  //     globals: globals.browser,
  //     parserOptions: {
  //       ecmaVersion: 'latest',
  //       ecmaFeatures: { jsx: true },
  //       sourceType: 'module',
  //     },
  //   },
  //   rules: {
  //     'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
  //   },
  // },
]);
