const buffer = Buffer.from('hello');
const myObj = {};
const str = 'a';
const flag = true;
const count = 4;

console.log(typeof myObj);
console.log(typeof buffer);
console.log(typeof str);
console.log(typeof flag);
console.log(typeof count);
//isBuffer  判断某个对象是否为Buffer对象
console.log(Buffer.isBuffer(myObj));
console.log(Buffer.isBuffer(buffer));
