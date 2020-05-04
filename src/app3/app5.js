
const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data',(data) => {
        console.log(data.toString());
    });
});

server.listen(9180, () => {
    console.log('server is listening');
});