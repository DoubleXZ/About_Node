//读取一个文件，写入到另一个文件里面，实现文件拷贝
const fs = require('fs');
//读入流
const readStream = fs.createReadStream('./app12.js', {encoding:'utf8'});
//写出流
const writeStream = fs.createWriteStream('myTest.js', {encoding:'utf8'});

readStream.on('data', (data) => {
    writeStream.write(data, () => {
        console.log(data);
    });
});
