import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // This makes sure local dev server falls back to index.html for any unknown route
    historyApiFallback: true,
  }
});