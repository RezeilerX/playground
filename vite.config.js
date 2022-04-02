import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.IS_GUTENBERG_PLUGIN': false,
    ...(process.env.NODE_ENV !== 'production' && {
      global: {},
      process: {},
    })
  }
})
