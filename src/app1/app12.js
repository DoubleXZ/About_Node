const fs = require('fs');
//获取一个文件读入流
const readStream = fs.createReadStream('./app12.js', {encoding:'utf8'});

// open事件，返回一个文件描述符
readStream.on('open',(fd) => {
    console.log(fd);
});
// ready 事件，在‘open’事件结束后立即触发
readStream.on('ready', () => {
    console.log('ready');
});
//  文件读取事件，data表示读到的内容
readStream.on('data', (data) => {
    console.log(data);
});
// 文件读取完毕
readStream.on('end', () => {
    console.log('end');
});
// 关闭事件
readStream.on('close', () => {
    console.log('close');
});
// 异常事件
readStream.on('error', (err) => {
    console.log(err);
});