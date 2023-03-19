module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard-with-typescript'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      'tsconfig.json',
      'tsconfig.node.json',
      'jest.config.ts',
      'vite.config.ts',
      'vitest.setup.ts'
    ]
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/await-thenable': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/no-unused-vars': 1, // warn
    'react-hooks/exhaustive-deps': 2 // error
  }
}
