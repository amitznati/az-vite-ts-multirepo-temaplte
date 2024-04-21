import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig(({mode}) => ({
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: mode === 'production',
    target: 'es6',
    lib: {
      entry: './src/index.ts',
      name: pkg.name,
      fileName: pkg.name,
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies), // don't bundle dependencies
        /^node:.*/, // don't bundle built-in Node.js modules (use protocol imports!)
      ],
    },

  },
  plugins: [dts({
    insertTypesEntry: true
  })], // emit TS declaration files
}))
