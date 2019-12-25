const express = require(express);
const proxy = require('http-proxy');

var api = express();
var apiProxy= proxy.createProxyServer();

api.all('/api/v1/auth/*', (req, res) => {
    api.Proxy.web(req, res, {target: 'http://localhost:8001'});
});

api.all('/api/v1/files/*', (req, res) => {
    api.Proxy.web(req, res, {target: 'http://localhost:8002'});
});

api.all('/api/v1/filmovi/*', (req, res) => {
    api.Proxy.web(req, res, {target: 'http://localhost:8000'});
});

api.listen(5000);