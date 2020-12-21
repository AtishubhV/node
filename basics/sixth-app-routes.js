const http = require('http');
const routes = require('./route/route');
const server = http.createServer(routes.routes);
server.listen(routes.port);