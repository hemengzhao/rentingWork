import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

/**
 * @type {import('vite').UserConfig}
 */
export default {
  base: './',
  open: true,
  alias: {
    '@': resolve(__dirname, 'src')
  },
  proxy: {
    // '/api': {
    //   target: 'https://blog.csdn.net/weixin_45292658',
    //   changeOrigin: true,
    //   rewrite: path => path.replace(/^\/api/, '')
    // }
  },
  plugins: [vue()]
}
