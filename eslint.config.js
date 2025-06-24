import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    pnpm: true,
    rules: {
      'no-sequences': 'off',
      'no-console': 'off',
    },
  },
)
