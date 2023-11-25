import shopify from 'vite-plugin-shopify'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    plugins: [shopify()],
  }
})