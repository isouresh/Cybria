const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://accounts.spotify.com/';

const nggUrl2 = 'https://https://accounts.spotify.com/en/status?flow_ctx=ad5db26a-eae2-4fe6-a211-208c021a557e%3A1734261584/';

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
    return nggUrl2;
  }
});
app.use('/', proxy);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
