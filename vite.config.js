import shopify from 'vite-plugin-shopify'

export default {
  build: { 
    emptyOutDir: false,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        app: 'frontend/entrypoints/js/App.js',
      },
      output: {
        dir: 'assets',
        entryFileNames: '[name].bundle.js',
        chunkFileNames: `[name].bundle.js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  plugins: [
    shopify()
  ]
}