import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    target: 'es2015',
    minify: 'esbuild',
    cssMinify: true,
    outDir: 'dist'
  },
  server: {
    port: 3000,
    strictPort: true
  }
});
