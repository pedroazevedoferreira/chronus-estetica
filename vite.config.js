import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The production build is served from https://<user>.github.io/chronus-estetica/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/chronus-estetica/' : '/',
  plugins: [react()],
}))
