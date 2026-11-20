import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { apkMimePlugin } from './vite.apk-mime.js'

export default defineConfig({
  plugins: [apkMimePlugin(), react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        help: 'help.html',
        privacy: 'privacy.html',
      },
    },
  },
})
