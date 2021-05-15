module.exports = {
  root: true,
  env: {
    'es6': true,
    "browser": true,
    "node": true
  },
  "rules": {
    "no-var": "error",
    "indent": "error",
    "no-multi-spaces": "error",
    "prefer-const": "error",
    "no-use-before-define": "off",
    "import/prefer-default-export": 'off',
    "import/no-cycle": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-underscore-dangle": "off",
    "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }],
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
  },
  extends: [
    "react-app",
    "react-app/jest",
    'airbnb-typescript',
    "plugin:prettier/recommended",
    "prettier"
  ],
  parserOptions: {
    "ecmaVersion": 2020,
    project: './tsconfig.eslint.json',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    }
  ],
  ignorePatterns: [
    'gitty.js',
    '.eslintrc.js',
    './src/@types/**/*',
  ]
};