const http = require('http');

//存储响应数据
let responseData = '';
//发送get请求
http.request({
    'host': 'localhost',
    'port': '3000',
    'method': 'get'
},function(response) {
    response.on('data', function(chunk) {
        responseData += chunk;
    });

    response.on('end', function() {
        console.log(responseData);
    });
}).end();