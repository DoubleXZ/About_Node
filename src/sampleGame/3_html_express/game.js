module.exports = function (playerAction) {

    if (['rock','scissor','paper'].indexOf(playerAction) === -1) {
        throw new Error('非法输入！请输入rock或scissor或paper');
    }
    console.log('用户出了' + playerAction);

    //计算电脑的行为
    let computerAction;
    let random = Math.random() * 3;
    if (random < 1) {
        computerAction = 'rock';
        console.log('电脑出了石头');
    } else if (random > 2) {
        computerAction = 'scissor';
        console.log('电脑出了剪刀');
    } else {
        computerAction = 'paper';
        console.log('电脑出了布');
    }

    //游戏判断逻辑
    if (playerAction === computerAction) {
        console.log('平局');
        return 0;
    } else if(
        (playerAction === 'rock' && computerAction === 'paper') ||
        (playerAction === 'scissor' && computerAction === 'rock') ||
        (playerAction === 'paper' && computerAction === 'scissor')
    ) {
        console.log('哈哈哈，你输了！');
        return -1;
    } else {
        console.log('恭喜你，你赢了！');
        return 1;
    }
}