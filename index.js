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
    if (req.headers.host === 'ngc.nvidia.com/signin') {
      req.headers['X-Forwarded-For'] = 'ngc.nvidia.com/signin'; 
      req.headers['X-Real_IP'] = 'ngc.nvidia.com/signin';
      req.headers['Via'] = 'ngc.nvidia.com/signin';
    }
    return play.geforcenow.com;
  }
});
app.use('/', proxy);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
