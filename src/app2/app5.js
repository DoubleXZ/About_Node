const buffer = Buffer.from('你好世界');
const jsonString = JSON.stringify(buffer);

console.log(jsonString);

const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

const buffer2 = Buffer.from(jsonObj);

console.log(buffer2.toString('utf8'));