const childProcess = require('child_process');
/*
    spawn(command[,args][,options])创建子进程，执行shell命令
    command: 待执行命令
    args:执行命令所需参数，若不指定，则默认传一个空的数组
    使用给定的命令，生成一个新的进程
 */

const lsChildProcess = childProcess.spawn('ls', ['-al','./']);
//将子进程执行的结果打印到控制台
lsChildProcess.stdout.on('data', (data) => {
    //console.log(data.toString());
    //console.log(`child process id: ${lsChildProcess.pid}`);
    console.log(`stdout: ${data}`)
});

lsChildProcess.on('close', (code, signal) => {
   console.log(code);
});

