import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import tailwind from 'eslint-plugin-tailwindcss'

const compat = new FlatCompat()

export default antfu({})
  .overrideRules({
    'perfectionist/sort-imports': [
      'error',
      {
        internalPattern: ['@/**'],
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
      },
    ],
    'vue/valid-template-root': [
      'off',
    ],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
      },
    ],
    'vue/block-order': [
      'error',
      { order: ['script', 'template', 'style'] },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
    ],
  })
  .append(compat
    .extends('plugin:@conarti/feature-sliced/rules')
    .map((plugin => ({
      ...plugin,
      name: 'feature-sliced/rules',
    }))),
  )
  .append({
    name: 'feature-sliced/disables',
    files: ['src/app/index.ts'],
    rules: { '@conarti/feature-sliced/public-api': 'off' },
  })
  .append(tailwind.configs['flat/recommended']
    .map(plugin => ({
      ...plugin,
      name: plugin.name.replace(':', '/').replace('base', 'setup'),
    })),
  )
  .overrideRules({
    'tailwindcss/no-custom-classname': [
      'error',
      { whitelist: ['bi-.*'] },
    ],
  })
