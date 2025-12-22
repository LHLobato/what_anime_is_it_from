import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: O nome do repo deve estar entre barras /
  base: "/what_anime_is_it_from/", 
  build: {
    outDir: 'dist',
  }
})