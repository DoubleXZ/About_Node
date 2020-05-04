var myInfo = {
    name: 'zhangsan',
    age: 26
}

var myFunction = function (inputNum) {
    return inputNum + 6;
};

//将该模块中定义的对象和方法导出,若没有下面的导出动作，则在其他模块不可用
exports.myInfo = myInfo;
exports.myFunction = myFunction;