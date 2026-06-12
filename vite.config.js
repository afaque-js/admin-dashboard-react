import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),       // Must come first to parse JSX properly
    tailwindcss(), // Seamlessly hooks into your active files
  ],
})
