import path from 'path'

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  optimizeDeps: {
    include: ['lodash']
  },
  proxy: {
    '/api': {
      target: 'http://rap2.taobao.org:38080/app/mock/237355',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, '')
    }
  }
  // ...
}
