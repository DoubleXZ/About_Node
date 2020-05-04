const http = require('http');

const server = http.createServer(function(request, response) {
    let data = '';

    //监听data事件，表示客户端发送的数据，由chunk参数表示
    request.on('data', function(chunk) {
        data += chunk;
    }); 

    //监听end事件，表示客户端数据发送完毕
    request.on('end', function() {
        let method = request.method;
        let headers = JSON.stringify(request.headers);
        let httpVersion = request.httpVersion;
        let httpUrl = request.httpUrl;

        response.writeHead(200, {'Content-Type': 'text/html'});

        let responseContent = method + ', ' + headers + ', ' +httpVersion + ', ' + httpUrl;

        response.end(responseContent);
    });
});

server.listen(3000, function() {
    console.log('Node Server started on port 3000');
});