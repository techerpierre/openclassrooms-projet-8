import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
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