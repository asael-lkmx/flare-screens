import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@lkmx/flare/src/_rem.scss";
          @import "@lkmx/flare/src/responsiveness/_respond_to.scss";
        `
      }
    }
  }
})