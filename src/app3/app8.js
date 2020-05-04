// TCP Client编程模式
const net = require('net');
//通过Socket对象创建客户端
const client = new net.Socket();
client.connect(8888, 'localhost', () => {
    console.log('connected to the server');
});