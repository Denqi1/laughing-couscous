import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import circleDependency from 'vite-plugin-circular-dependency';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), circleDependency()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
