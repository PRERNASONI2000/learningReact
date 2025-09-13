import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/learningReact/",  // 👈 yeh line add karein
  plugins: [
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // For '@' alias to work
    },
  },
})
