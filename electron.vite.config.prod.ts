import { bytecodePlugin, defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { resolve } from 'path';
import sass from "vite-plugin-sass-dts";

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin(),
      bytecodePlugin({ protectedStrings: [ "ready-to-show" ] })
    ],
    build: {
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
      outDir: resolve(__dirname, 'compiled/renderer')
    },
    plugins: [ sass() ]
  }
})