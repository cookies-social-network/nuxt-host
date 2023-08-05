// https://github.com/danielroe/nuxt-vitest
import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
