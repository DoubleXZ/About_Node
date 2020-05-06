//网页版本的石头剪刀布游戏
//重点是获取网页中的请求参数，做逻辑判断后返回到网页
const http = require('http');
const url = require('url');
const queryString = require('querystring');
const fs = require('fs');

const game = require('./game');

//玩家最后一次请求
let playerLastAction = null;
//玩家赢的次数
let playerWon = 0;
//玩家连续相同次数
let sameCount = 0;

http.createServer((request, response) => {
    //通过内置url模块，将http请求解析成协议(protocol)://域名(host):端口(port)/路径名(pathname)?请求参数(query)
    const urlPath = url.parse(request.url);

    //http://localhost:3000/favicon.ico的情况
    if (urlPath.pathname === '/favicon.ico') {
        response.writeHead(200);
        response.end();
        return;
    }

    //http://localhost:3000/game?action=rock的情况
    if (urlPath.pathname === '/game') {
        const query = queryString.parse(urlPath.query);
        const playerAction = query.action;
        /*
            添加其他逻辑：
            1、若玩家赢得次数超过3，或者玩家作弊（sameCount=6）,则电脑端作弊，提示不玩了
            2、若玩家连续赢三次，则电脑端认为玩家作弊
         */
        //电脑端作弊
        if (playerWon > 3 || sameCount === 6) {
            response.writeHead(500);
            response.end('不和你玩儿了');
            return;
        }
        //用户端作弊
        if (playerLastAction && playerLastAction === playerAction ) {
            sameCount++;
        } else {
            sameCount = 0;
        }

        playerLastAction = playerAction;

        if (sameCount >= 3) {
            response.writeHead(400);
            response.end('你作弊！');
            sameCount = 6;
            return;
        }

        const gameResult = game(playerAction);

        response.writeHead(200);
        if (gameResult === 0) {
            response.end('平局');
        }else if (gameResult === -1) {
            response.end('你输了');
        }else {
            response.end('你赢了');
            playerWon++;
        }
    }

    //http://localhost:3000/
    if (urlPath.pathname == '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    }

}).listen(3000, () => {
    console.log('server is listening');
});