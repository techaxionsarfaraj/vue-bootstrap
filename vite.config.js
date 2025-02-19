import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),      
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/assets/scss/_variables.scss";`
  //     },
  //   },
  // },
  //* build: {
  //   cssCodeSplit: true,  // Splits CSS into separate files
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: (assetInfo) => {
  //         if (assetInfo.name?.endsWith('.css')) {
  //           return 'assets/sarfaraj.css'; // Generate hashed CSS file
  //         }
  //         return 'assets/sarfaraj.bat';
  //       },
  //     },
  //   },
  // },
})
