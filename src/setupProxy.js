const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://ceshi13.dishait.cn',//请求的真实地址
            changeOrigin: true,
        })
    );
};
