import globals from "globals";
import js from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser
    }
  },

  js.configs.all,

  {
    rules: {
      'capitalized-comments': 'off',
      'curly': ['error', 'multi-line'],
      'max-lines-per-function': 'off',
      'max-statements': 'off',
      'new-cap': 'off',
      'no-console': 'warn',
      'no-magic-numbers': 'off',
      'one-var': ['error', 'never'],
      'sort-imports': 'off',
      'sort-keys': 'off',
    },
  },
];
