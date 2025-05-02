
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default({
  plugins: [react()],
  base: '/Education_AI/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
