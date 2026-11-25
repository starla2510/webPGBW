import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'static',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        game1: resolve(__dirname, 'game1.html'),
        game2: resolve(__dirname, 'game2.html'),
        game3: resolve(__dirname, 'game3.html'),
      },
    },
  },
});