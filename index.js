const http = require('http');

var httpService = require('./request-handler');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(httpService.handleRequest);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});