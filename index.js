const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://open.spotify.com/';

const proxy = createProxyMiddleware({
  target: nggUrl,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'accounts.spotify.com/') {
      req.headers['X-Forwarded-For'] = 'accounts.spotify.com'; 
      req.headers['X-Real_IP'] = 'accounts.spotify.com';
      req.headers['Via'] = 'accounts.spotify.com';
    }
    return nggUrl;
  }
});
app.use('/', proxy);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
