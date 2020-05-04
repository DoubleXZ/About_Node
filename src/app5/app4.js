
const EventEmitter = require('events');
const emitter = new EventEmitter();

//EventEmitter内置事件：newListener，表示有事件注册时就会触发
//此处如果用on来监听newListener,则会导致内存溢出
emitter.once('newListener', (event, listener) => {
   if (event === 'myEvent'){
       emitter.on('myEvent', () => {
           console.log('hello');
       });
   }
});

emitter.on('myEvent', () => {
    console.log('world');
});

emitter.emit('myEvent');