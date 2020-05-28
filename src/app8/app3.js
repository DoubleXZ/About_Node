const childProcess = require('child_process');
/*
    spawn创建子进程，执行node命令
 */

const nodeChildProcess = childProcess.spawn('node', ['app2']);

//打印命令执行结果
nodeChildProcess.stdout.on('data', (data) => {
   console.log(`${data}`);
});

nodeChildProcess.on('exit', (code, signal) => {
   console.log(code);
   console.log(signal);
});