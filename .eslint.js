module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    quotes: [2, 'double'],
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  linterOptions: {
    exclude: ['./test-results/**/**', './test-reports/**/**'],
  },
};
