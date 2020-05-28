[1,2,3,4,5,6].forEach((i) => {
    console.log(i);
});

//进程间通信：监听收到的消息
process.on('message', (message) => {
   console.log(message);
   process.send('welcome');
});