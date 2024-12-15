const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://ngc.nvidia.com/signin/';

const proxy = createProxyMiddleware({
  target: nggUrl,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'accounts.spotify.com/') {
      req.headers['X-Forwarded-For'] = 'accounts.spotify.com'; 
      req.headers['X-Real_IP'] = 'open.spotify.com';
      req.headers['Via'] = 'open.spotify.com';
    }
    return play.geforcenow;
  }
});
app.use('/', proxy);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
