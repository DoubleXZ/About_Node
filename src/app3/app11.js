//用户数据报传输  UDP Server
const dgram = require('dgram');
const message = Buffer.from('This message comes from server');

const socket = dgram.createSocket('udp4', (msg, info) => {
    //创建完socket后向客户端发送消息
    socket.send(message, 0, message.length, info.port, info.address, (error, bytes) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('server has send ' + bytes + ' bytes message');
    });
});

socket.bind(9999,'localhost', () => {
    console.log('Server has binded to 9999');
});

//接收到客户端消息
socket.on('message', (msg, info) => {
    console.log('message event occur');
    console.log('收到客户端消息： ' + msg.toString());
});