import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        team: resolve(__dirname, 'team/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        policy: resolve(__dirname, 'policy/index.html'),
        imprint: resolve(__dirname, 'imprint/index.html'),
      },
    },
  },
});
