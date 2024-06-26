import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import circleDependency from 'vite-plugin-circular-dependency';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), circleDependency()],
  server: {
    port: 3000,
  },
});
