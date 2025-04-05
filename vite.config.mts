import Vue from '@vitejs/plugin-vue'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'
import SvgLoader from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  server: {
    port: 8080,
  },

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },

  plugins: [
    Vue(),
    VitePluginVueDevTools(),
    SvgLoader(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vitest', '@vueuse/core', 'pinia' ],
      dts: true,
    })
  ],

  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      all: true,
      include: [
        'src/**/*.{vue,ts}',
      ],
    },
  },
})
