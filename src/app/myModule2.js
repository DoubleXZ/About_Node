const myModule2 = {
    myInfo: {
        name: 'lisi',
        age: 24
    },

    myFunction: function (inputNum) {
        return inputNum + 5;
    }

};

//exports.myModule2 = myModule2;
module.exports = myModule2;