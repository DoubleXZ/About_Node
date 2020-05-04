//堆外创建内存空间，Buffer是在Node进程启动后就加载的，无需引用
const buffer = Buffer.alloc(128);

const length = buffer.write('hello world你好', 'utf8');

console.log('byte count ' + length);