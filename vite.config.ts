import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

/**
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    '@': resolve(__dirname, 'src')
  },
  plugins: [vue()]
}
