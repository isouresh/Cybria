const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://play.geforcenow.com/';

const proxy = createProxyMiddleware({
  target: nggUrl,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'play.geforcenow.com/') {
      req.headers['X-Forwarded-For'] = ''; 
      req.headers['198.251.90.4'] = '';
      req.headers['Via'] = '';
    }
    return nggUrl;
  }
});
app.use('/', proxy);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
