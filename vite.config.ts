import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
// import { fileURLToPath, URL } from "url";
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [vue()]
})
