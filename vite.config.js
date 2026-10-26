import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// React handles JSX and Fast Refresh; Tailwind v4 is processed by its Vite plugin.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
