//石头剪刀布游戏1.0
//console.log(process);
//用户行为来自于标准输入
const playerAction = process.argv[2];
//电脑行为
let computerAction;
if (playerAction != 'rock' && playerAction != 'scissor' && playerAction != 'paper') {
    console.log('请输入rock或scissor或paper');
} else {
    console.log('用户出了' + playerAction);

    const random = Math.random() * 3;
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

    if (playerAction === computerAction) {
        console.log('平局');
    } else if(
        (playerAction == 'rock' && computerAction == 'paper') ||
        (playerAction == 'scissor' && computerAction == 'rock') ||
        (playerAction == 'paper' && computerAction == 'scissor')
    ) {
        console.log('哈哈哈，你输了！');
    } else {
        console.log('恭喜你，你赢了！');
    }
}