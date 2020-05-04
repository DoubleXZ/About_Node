//WebSocket服务端
const http = require('http');
const io = require('socket.io');
const fs = require('fs');
//创建HTTP服务器
const server = http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    //HTTP 路由
    if (request.url === '/'){
        fs.readFile('./client.html','utf8', (error, data) => {
            if (error){
                console.log(error)
                return;
            }else {
                response.end(data.toString());
            }
        });
    }else {
        response.end('<html><body>Error</body></html>');
    }
});

server.listen(3000, 'localhost');
//转化为WebSocket
const socket = io.listen(server);
//连接建立后，生成一个socket对象
socket.on('connection', (socket) => {
    console.log('connection has been established');
    //收到消息事件
    socket.on('message', (message) => {
        console.log('message: ' + message);
    });
    //断开连接事件
    socket.on('disconnect', () => {
        console.log('connection has lost');
    });
    //发送消息
    socket.send('hello client');

    //自定义事件:serverEvent,向客户端发送一个字符串
    socket.emit('serverEvent', 'this is serverEvent');
    //服务端监听clientEvent自定义事件
    socket.on('clientEvent', (data) => {
        console.log(data.address + ', ' + data.age);
    });

    //服务端监听客户端的broadCastEventClient事件
    socket.on('broadCastEventClient', (data) => {
        console.log(data);
        //广播到所有连接的客户端
        socket.broadcast.emit('broadCastEventClient','you are good!');
        //只广播到建立连接的客户端
        //socket.emit('broadCastEventClient','you are good!');
    });

});
