const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://xxxx.com",
      changeOrigin: true,
    })
  );
  // app.use(
  //   '/kapi',
  //   createProxyMiddleware({
  //     target: 'http://echo.websocket.org',
  //     ws: true,
  //     changeOrigin: true
  //   })
  // )
};
