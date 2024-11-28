import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, // Puerto del servidor de desarrollo 
  proxy: { 
    '/api': { 
      target: 'http://localhost:3000', // URL de tu API 
      changeOrigin: true, 
      rewrite: (path) => path.replace(/^\/api/, '') 
    } 
  } 
}
})
