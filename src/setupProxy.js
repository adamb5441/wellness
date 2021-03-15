const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: process.env.REACT_APP_RECIPEAPI_URI,
        changeOrigin: true,
        secure: false,
      })
    )
  }