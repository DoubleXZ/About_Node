const util = require('util');

const obj = {
    name: '张三',
    address: 'qingdao',
    age: 24,
    married: false,
    getAge: function () {
        return this.age;
    }
};

const str = util.inspect(obj,{
    'colors': true
});

console.log(str);