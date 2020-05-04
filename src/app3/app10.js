const net = require('net');
const client = new net.Socket();

client.connect(8888, 'localhost', () => {
    //连接建立之后触发的回调
    console.log('connected to the server');
    //向服务端发送数据
    client.write('message from client');
});

client.on('data', (data) => {
    console.log('data from server: ' + data.toString());
    //客户端收到服务器的消息后，回应hello world
    client.write('hello world');
});

client.on('end', () => {
    console.log('end data');
});