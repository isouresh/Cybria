const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://holyunblocker.org/';

const proxy = createProxyMiddleware({
  target: nggUrl,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'holyunblocker.org') {
      req.headers['X-Forwarded-For'] = 'holyunblocker.org'; 
      req.headers['X-Real_IP'] = 'holyunblocker.org';
      req.headers['Via'] = 'holyunblocker.org';
    }
    return nggUrl;
  }
});
app.use('/', proxy);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
