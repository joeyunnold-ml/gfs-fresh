import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base so app works when served at /gfs-email/ from main prototype app
export default defineConfig({
  plugins: [react()],
  base: '/gfs-email/',
})
