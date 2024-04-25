import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
// import pkg from './package.json';

// const dependencies = Object.keys(pkg.dependencies);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
