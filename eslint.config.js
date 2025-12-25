import globals from 'globals'

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import importPlugin from 'eslint-plugin-import'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
})

export default [
  {
    languageOptions: {
      parserOptions: { ecmaVersion: 2020 },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  ...compat.extends('airbnb'),
  {
    rules: {
      'no-underscore-dangle': [2, { allow: ['__filename', '__dirname'] }],
      'import/no-extraneous-dependencies': 0,
      'no-console': 0,
      'import/extensions': 0,
    },
  },
];