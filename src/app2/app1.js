const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');

const compareResult = buffer1.compare(buffer2);

console.log(compareResult);