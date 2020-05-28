const childProcess = require('child_process');
/*
    fork(modulePath[,args][,options]) 创建子进程
    modulePath: 在子进程执行的模块
    args: 字符串数组，执行参数
 */
const forkProcess = childProcess.fork('./app5');
//进程间通信：监听message事件
forkProcess.on('message', (message) => {
    console.log('收到子进程返回消息： ' + message);
});

//进程间通信：发送消息
forkProcess.send('向子进程发送消息： hello world');