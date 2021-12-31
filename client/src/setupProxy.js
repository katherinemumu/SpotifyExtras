const proxy = require('http-proxy-middleware').createProxyMiddleware;

module.exports = function (app) {
    app.use(proxy(`/auth/**`, { target: 'http://localhost:9000' }));
    app.use(proxy(`/info/**`, { target: 'http://localhost:9000' }));
};