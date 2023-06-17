import { bytecodePlugin, defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { resolve } from 'path';
import sass from "vite-plugin-sass-dts";

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin(),
      bytecodePlugin({
        protectedStrings: [ "ready-to-show" ],
        chunkAlias: [ "index", "import_bookmarks", "get_bookmarks", "clip_history_search" ]
      })
    ],
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, './src/main/index.ts'),
          import_bookmarks: resolve(__dirname, './src/main/thread-scripts/import-bookmarks.ts'),
          get_bookmarks: resolve(__dirname, './src/main/thread-scripts/get-bookmarks.ts'),
          clip_history_search: resolve(__dirname, './src/main/thread-scripts/clip-history-search.ts')
        }
      },
      minify: true,
      outDir: './compiled/main'
    }
  },
  preload: {
    plugins: [
      externalizeDepsPlugin(),
      bytecodePlugin()
    ],
    build: {
      minify: true,
      outDir: './compiled/preload'
    }
  },
  renderer: {
    build: {
      minify: true, chunkSizeWarningLimit: 2000,
      cssCodeSplit: true,
      rollupOptions: {
        input: {
          index: resolve(__dirname, './src/renderer/index.html'),
          clipboard: resolve(__dirname, './src/renderer/clipboard.html'),
          feedreader: resolve(__dirname, './src/renderer/feedreader.html'),
          notepad: resolve(__dirname, './src/renderer/notepad.html')
        }
      },
      outDir: resolve(__dirname, 'compiled/renderer')
    },
    plugins: [ sass() ]
  }
})