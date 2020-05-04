const querystring = require('querystring');

const obj = {
    username:'zhangsan',
    address:'QingDao'
};

const str = querystring.stringify(obj);

console.log(str);