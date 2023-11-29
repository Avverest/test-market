module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-jsx',
    'standard-with-typescript',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: ['vite.config.ts'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'import/no-default-export': ['warn'],
    'react/prop-types': 'off', // Checked by ts
    '@typescript-eslint/no-unused-vars': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    'no-irregular-whitespace': 'off',
    'operator-linebreak': ['error', 'before'],
    'function-paren-newline': ['error', 'consistent'],
    'no-console': ["warn", { allow: ["debug"] }],
  },
}
