//石头剪刀布游戏2.0，使用commonjs规范进行优化
const game = require('./game.js');
//console.log(game('rock'));

//记录用户赢的次数，若用户赢了三次，则游戏停止
let winCount = 0;

//从标准输入获取用户的行为
process.stdin.on('data', (buffer) => {
    const playerAction = buffer.toString().trim();
    const result = game(playerAction);
    //console.log(result);
    if (result == 1) {
        winCount++;
        console.log('玩家赢了' + winCount + '次');
        if (winCount == 3) {
            console.log('不跟你玩儿了!');
            process.exit();
        }
    }
});