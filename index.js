const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://ngc.nvidia.com';

const proxy = createProxyMiddleware({
  target: nggUrl,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'ngc.nvidia.com') {
      req.headers['X-Forwarded-For'] = 'ngc.nvidia.com'; 
      req.headers['X-Real_IP'] = 'ngc.nvidia.com';
      req.headers['Via'] = 'ngc.nvidia.com';
    }
    return play.geforcenow.com;
  }
});
app.use('/', proxy);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
