import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage'
    },
    exclude: [...configDefaults.exclude]
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
