const http = require('http');
const querystring = require('querystring');
const url = require('url');

const userService = require('./UserService');

const server = http.createServer(function (request, response) {
    let data = '';

    request.on('data', function (chunk) {
        data += chunk;
    });

    request.on('end', function () {
        const requestUrl = request.url;
        const requestMethod = request.method;
        //console.log(requestUrl + requestMethod);

        if (requestUrl.includes('login') && requestMethod === 'GET') {
            const requestParam = url.parse(requestUrl);
            console.log(requestParam);

            const queryObject = querystring.parse(requestParam.query);
            console.log(queryObject);

            const loginResult = userService.login(queryObject.username, queryObject.password);
            console.log('loginResult: ' + loginResult);

            response.writeHead(200, {'Content-Type':'text/plain'});
            response.end('' + queryObject.username + ', password: ' + queryObject.password);
        }

    });
});

server.listen(3000, function () {
    console.log('Node Server Started on port 3000');
});