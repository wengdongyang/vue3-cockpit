/** @format */

import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import { viteMockServe } from 'vite-plugin-mock';
// import vueDevTools from 'vite-plugin-vue-devtools';
import { createHtmlPlugin } from 'vite-plugin-html';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
    vueSetupExtend({ enableAutoExpose: true }), // setup上主动命名
    // viteMockServe({ mockPath: './src/mocks', enable: true }), // mock接口
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.ts',
      template: 'public/index.html',
      inject: {
        data: { title: '驾驶舱模板系统', injectScript: `` },
        tags: [{ injectTo: 'body-prepend', tag: 'section', attrs: { id: 'app' } }],
      },
    }), // html模板
  ],
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    host: true,
    open: true,
    proxy: {
      // '/mock': { target: baseURL, changeOrigin: true }
    },
  },
});
