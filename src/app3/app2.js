//TCP 服务端的各种监听事件
const net = require('net');

const tcpServer = new net.Server();

tcpServer.on('connection', (socket) => {
    console.log('client connected');
});

tcpServer.listen(8888);

tcpServer.on("listening", () => {
    console.log('server is listening');
    tcpServer.close();
});

tcpServer.on("close", () => {
    console.log('server closed');
});

tcpServer.on("error", (err) => {
    console.log(err);
    console.log('server error');
});