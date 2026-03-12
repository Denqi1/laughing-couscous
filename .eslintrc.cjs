module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier',
    'plugin:jsdoc/recommended-typescript',
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: { alwaysTryTypes: true } },
  },
  rules: {
    'import/no-cycle': [2, { maxDepth: '∞' }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'react/react-in-jsx-scope': 'off',

    'jsdoc/require-jsdoc': [
      2,
      {
        contexts: [
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature',
          'TSIndexSignature',
          'TSCallSignatureDeclaration',
          'TSEnumDeclaration',
          'TSEnumMember',
          'TSDeclareFunction',
        ],
      },
    ],
    'jsdoc/require-param': 0,
    'jsdoc/require-returns': 0,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'jsdoc'],
};
