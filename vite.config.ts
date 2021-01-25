import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

/**
 * @type {import('vite').UserConfig}
 */
export default {
  base: './',
  alias: {
    '@': resolve(__dirname, 'src')
  },
  plugins: [vue()],
  server: {
    open: true,
    proxy: {
      // '/api': {
      //   target: 'https://blog.csdn.net/weixin_45292658',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, '')
      // }
    }
  },
  build: {
    // assetsDir: './assets'
  }
}
