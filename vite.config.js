import { defineConfig } from 'vite'
import pugPlugin from './plugins/vite-plugin-pug.js'
import content from './src/data/content.js'

export default defineConfig({
  base: './',
  plugins: [pugPlugin({ entry: 'src/index.pug', locals: content })],
  build: {
    target: 'es2019',
    cssTarget: ['chrome87', 'firefox78', 'safari14'],
    outDir: 'dist',
    assetsInlineLimit: 0
  }
})
