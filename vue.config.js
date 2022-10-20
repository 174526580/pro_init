let proxyObj = {};
proxyObj['/'] = {
  ws: false,
  target: 'http://localhost:99/web/Mobile',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
};
module.exports = {
  lintOnSave: false,
  outputDir: 'mobile',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  },
  publicPath: '/mobile/'
}