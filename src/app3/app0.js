//Node 对于TCP服务端的支持
const net = require('net');

const tcpServer = net.createServer((socket) => {
    console.log('client connected');
    console.log(socket);
});

tcpServer.listen(8888, () => {
    console.log('server is listening');
});