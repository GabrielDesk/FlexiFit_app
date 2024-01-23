module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/typescript',
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/', 'assets/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.native.js'],
      },
    },
  },
  rules: {
    '@typescript-eslint/rule-name': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.ts', '.tsx', '.native.js'],
      },
    ],
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'default-case': 'off',
    'no-plusplus': 0,
    radix: 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        'eslint-disable-next-line prettier/prettier': 'off',
      },
    ],
  },
};
