//Buffer类中的静态方法
const str = 'utf8';
const str2 = 'utf-8';
const str3 = 'UTF-8';
const str4 = 'utf9';
const str5 = 'gb2312';
const str6 = 'gbk';

//判断字符串是否是有效的编码格式
console.log(Buffer.isEncoding(str));
console.log(Buffer.isEncoding(str2));
console.log(Buffer.isEncoding(str3));
console.log(Buffer.isEncoding(str4));
console.log(Buffer.isEncoding(str5));
console.log(Buffer.isEncoding(str6));