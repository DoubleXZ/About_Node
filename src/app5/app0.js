//Node中的事件模型
const http = require('http');

const httpServer = http.createServer();

httpServer.addListener('request', (request, response) => {
   if (request.url === '/'){
       console.log('addListener');
       response.end('end');
   }
});

httpServer.on('request', (request, response) => {
    if (request.url === '/'){
        console.log('on');
        response.end('end2');
    }
});

//仅执行一次
httpServer.once('request', (request, response) => {
    if (request.url === '/'){
        console.log('once');
        response.end('end once');
    }
});
//若要移除某个监听事件，则其回调函数应该单独定义
const listener = (request, response) => {
    if (request.url === '/'){
        console.log('hello listener');
        response.end('welcome ending');
    }
};

httpServer.on('request', listener);

//移除request事件监听
httpServer.removeListener('request',listener);
//httpServer.off('request', listener);

//移除所有监听
//httpServer.removeAllListeners('request');

httpServer.listen(3000, () => {
    console.log('listening to port 3000');
});