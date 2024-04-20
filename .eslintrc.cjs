module.exports = {
  extends: 'xx',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      'tsconfig.json',
      'tsconfig.node.json',
      'jest.config.ts',
      'vite.config.ts',
      'vitest.setup.ts',
    ],
  },
  globals: {
    logger: true,
    $__SENTRY__$: true,
    $__THEME__$: true,
  },
  rules: {},
};
