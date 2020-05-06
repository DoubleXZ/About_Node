const express = require('express');
const fs = require('fs');
const game = require('./game');

//玩家最后一次请求
let playerLastAction = null;
//玩家赢的次数
let playerWinCount = 0;
//玩家连续相同次数
let sameCount = 0;

const app = express();
//路由处理
//http://localhost:3000/favicon.ico的情况
app.get('/favicon.ico', (request, response) => {
    response.status(200);
    return;
});

//http://localhost:3000/game?action=rock的情况
app.get(
    '/game',
    function (request, response, next) {
        if (playerWinCount >= 3 || sameCount === 6) {
            response.status(500);
            response.send('我再也不和你玩儿了');
            return;
        }

        next();

        if (response.playerWon){
            playerWinCount++;
        }

    },

    function (request,response,next) {
        //获取请求参数:express自动帮我们把query处理好挂在request上
        const query = request.query;
        const playAction = query.action;

        if (!playAction) {
            response.status(400);
            response.send();
            return;
        }

        if (playerLastAction === playAction) {
            sameCount++;
            if (sameCount >= 3){
                response.status(500);
                response.send('你作弊，我不和你玩儿了！');
                sameCount = 6;
                return;
            }

        } else {
            sameCount = 0;
        }

        playerLastAction = playAction;
        //把用户操作挂在response上，传递给下一个中间件
        response.playerAction = playAction;
        next();
    },

    function (request,response) {
        const playerAction = response.playerAction;
        const result = game(playerAction);

        response.status(200);
        if (result === 0) {
            response.send('平局');
        } else if (result === -1) {
            response.send('你输了！');
        } else {
            response.send('你赢了');
            response.playerWon = true;
        }
    }

);


//http://localhost:3000/
app.get('/', (request, response) => {
    //send方法会判断你传入的值的类型，文本的话则会处理为text/html
    response.send(fs.readFileSync(__dirname + '/index.html', 'utf8'));
});

app.listen(3000);