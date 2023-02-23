import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),'babel-plugin-macros', 'babel-plugin-styled-components']
})
