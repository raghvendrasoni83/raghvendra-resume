import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: 'https://github.com/raghvendrasoni83/raghvendra-resume',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
