import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [react()],
  server: { //port: 5173, 
  proxy: { 
    '/api': { 
      target: 'http://localhost:3000', // URL de tu API 
      changeOrigin: true, 
      rewrite: (path) => path.replace(/^\/api/, '') 
    } 
  } 
}
})*/

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8080
  }
})