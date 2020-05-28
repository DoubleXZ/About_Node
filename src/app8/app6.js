const childProcess = require('child_process');
/*
    exec(command[,options][,callback]) 创建子进程，执行app7
    command:以空格分隔的待执行命令
    会先生成一个shell，然后在改shell中执行command命令
    该方式是有回调函数的
 */
childProcess.exec('node app7', (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log(stdout.toString());
    }
});