//通过字符串构建Buffer
const str = 'abcde薛大米';
const buffer = Buffer.from(str);

console.log(str.length);//字符的个数
console.log(buffer.length);
//Node中字符串的长度和Buffer的长度是没有必然联系的，Buffer中存储的是二进制byte
console.log(buffer);
console.log(buffer.toString())