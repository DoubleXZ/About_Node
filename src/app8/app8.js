const childProcess = require('child_process');
/*
    execFile(file[,args][,options][,callback]) 创建子进程，执行app9
    file: 待执行的命令名称
    args: 字符串数组，执行命令的参数
    callback: 回调函数
    该方式创建的子进程与exec()方式相似，但不会生成一个新的shell，所以效率会更高一些

 */
childProcess.execFile('node',['app9'],(error, stdout, stderr) => {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log(stdout.toString());
    }
});