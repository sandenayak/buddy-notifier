const http = require('http');

var httpService = require('./request-handler');

const hostname = '0.0.0.0';
const PORT = process.env.PORT || 5000;

const server = http.createServer(httpService.handleRequest);

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});