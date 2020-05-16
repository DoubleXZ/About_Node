const http = require('http');
const querystring = require('querystring');
const url = require('url');
const userController = require('./user/controller/userController');

const server = http.createServer((request, response) => {
    let requestData = '';
    request.on('data', (chunk) => {
        requestData += chunk;
    });

    request.on('end', () => {
       const requestUrl = request.url;
       const requestMethod = request.method;
       console.log('request url is ' + requestUrl);

       if (requestUrl.includes('login') && requestMethod === 'GET'){
            const requestParams = url.parse(requestUrl);
            const queryObject = querystring.parse(requestParams.query);

            console.log(queryObject);

            userController.userLogin(queryObject.username, queryObject.password);

            response.writeHead(200, {'Content-Type':'text/plain'});
            response.end('username: ' + queryObject.username + ', password: ' + queryObject.password)


       }



    });

});

server.listen(3000, () => {
    console.log('server is listening to port 3000');
});