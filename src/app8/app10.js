const cluster = require('cluster');
const http = require('http');
const os = require('os');
/*
    Master-Worker模式
    How It Works
    cluster模块提供两种策略来分发到来的连接
    1、除了Windows平台上的默认方式：round-robin。
       master进程监听某个端口，接收新的连接，以轮询的方式将其分发给worker进程，并使用一些内置的智能来避免worker进程过载；
    2、master进程创建一个监听socket并将其发送给感兴趣的worker进程。之后，worker进程会直接接收到来的连接。

    因为worker都是单独的进程，他们可以基于程序的需要被kill掉或者重新生成，而不影响其他worker的工作。只要仍有相同的worker存活，服务器将会继续接收连接。
    如果没有worker存活，存量worker将会被drop掉，且新的连接会被拒绝。Node.js不会自动管理worker的数量，而是由应用基于自身需要管理worker池。
 */

const cpuCount = os.cpus().length;
//console.log('当前电脑CUP数： ' + cpuCount);

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < cpuCount; ++i){
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
       console.log(`worker ${worker.process.pid} died`);
    });

} else {
    const httpServer = http.createServer((request, response) => {
        let data = '';
        request.on('data', (chunk) => {
            data += chunk;
        });

        request.on('end', () => {
           response.writeHead(200, {'Content-Type':'text/plain'});
           response.end(`${process.pid}`);
        });
    });

    httpServer.listen(3000, () => {
       console.log(`listening to port 3000, Worker ${process.pid} started`);
    });
}