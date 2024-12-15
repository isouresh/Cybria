const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://accounts.spotify.com/';

const proxy = createProxyMiddleware({
  target: accounts.spotify.com,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'accounts.spotify.com/') {
      req.headers['X-Forwarded-For'] = 'accounts.spotify.com'; 
      req.headers['X-Real_IP'] = 'accounts.spotify.com';
      req.headers['Via'] = 'accounts.spotify.com';
    }
    return accounts.spotify.com;
  }
});
app.use('/', proxy);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
