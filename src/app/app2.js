const http = require('http');
const httpServer = new http.Server();

httpServer.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Node.js !');
});

httpServer.on('connection', function() {
    console.log('Client is Connected !');
});

httpServer.listen(3333, function() {
    console.log('Node Server Started On Port 3333');
});
