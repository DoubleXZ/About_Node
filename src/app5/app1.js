const http = require('http');
const events = require('events');

const httpServer = http.createServer();
httpServer.setMaxListeners(2);

httpServer.addListener('request', (request, response) => {
    if (request.url === '/'){
        console.log('addListener');
        response.end('end');
    }
});
//若要移除某个监听事件，则其回调函数应该单独定义
const listener = (request, response) => {
    if (request.url === '/'){
        console.log('hello listener');
        response.end('welcome ending');
    }
};

const listener2 = (request, response) => {
    if (request.url === '/'){
        console.log('hello listener');
        response.end('welcome ending');
    }
};

// const listener3 = (request, response) => {
//     if (request.url === '/'){
//         console.log('hello listener');
//         response.end('welcome ending');
//     }
// };

console.log('default max listener count: ' + events.EventEmitter.defaultMaxListeners);

httpServer.on('request', listener);
httpServer.on('request', listener2);
// httpServer.on('request', listener3);

httpServer.listen(3000, () => {
    console.log('listening to port 3000');
});