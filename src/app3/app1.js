//创建一个tcpServer，并启动
const net = require('net');

const tcpServer = net.createServer((socket) => {
    console.log('client connected');
});

tcpServer.listen(8889);

tcpServer.on('listening', () => {
    console.log('server is listening');
} );