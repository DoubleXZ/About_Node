//客户端向服务器端写数据，首次建立连接后，服务器向客户端写消息
const net = require('net');
const server = net.createServer((socket) => {
    console.log('client connected');
    const address = socket.address();
    const message = 'server address is ' + JSON.stringify(address);

    socket.write(message, () => {
        //服务器端发送完毕的回调

        //从socket创建完毕后，到当前为写出到客户端的总的字节数
        const writeSize = socket.bytesWritten;
        console.log(message);

        console.log('message size is ' + writeSize);
    });

    socket.on('data', (data) => {
        console.log(data.toString());
        //从socket创建完毕后，到当前为止读取到的总的字节数
        const readSize = socket.bytesRead;
        console.log('data size is ' + readSize);
    });
});

server.listen(8888, () => {
   console.log('server is listening');
});

