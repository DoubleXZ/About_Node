//自定义事件
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('myEvent', function myListener() {
    console.log('myListener');
});

emitter.on('myEvent', function myListener2(param1, param2) {
   console.log(`myListener2: ${param2}, ${param2}`);
});

emitter.on('myEvent', function myListener3(...params){
    const values = params.join(', ');
    console.log(`myListener3: ${values}`);
});
//打印出所有监听了myEvent事件的监听器
console.log(emitter.listeners('myEvent'));
//发射
emitter.emit('myEvent', 'a','b','c','d','e','f');