const querystring = require('querystring');

const str = 'username=zhangsan&address=青岛';

const obj = querystring.parse(str);

console.log(obj);