import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  base: process.env.VITE_APP_BASE_URL || undefined,
  plugins: [
    ViteMinifyPlugin({}),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
        compress: {
            drop_console: true,
        }
    }
  }
})