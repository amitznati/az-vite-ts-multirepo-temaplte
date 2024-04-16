import { defineConfig, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react'
import pkg from './package.json' assert { type: 'json' }

const ignoredModules = Object.keys(pkg.dependencies)
  .filter(dep => dep.startsWith('digital-'))
  .map(dep => new RegExp(`node_modules/${dep}/`))

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174
  },
  plugins: [
    react(),
    {
      name: 'watch-node-modules',
      configureServer: (server: ViteDevServer) : void => {
        server.watcher.options = {
          ...server.watcher.options,
          ignored: [
            ...ignoredModules,
            '**/.git/**',
          ]
        }
      }
    }
  ],
})
