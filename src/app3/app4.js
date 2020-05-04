//tcp服务端控制连接的客户端的数量
const net = require('net');

const server = net.createServer((socket) => {
    console.log('client connected');
});

//限制两个客户端连接到该server
server.maxConnections = 2;

server.getConnections((error, count) => {
    console.log('client count: ' + count);
});

server.listen(8888, () => {
    console.log('server is listening');
});