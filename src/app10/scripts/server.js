/**
 * 启动脚本
 * 可以通过npm script来运行，需要在package.json中配置
 */
require('../app/app').listen(3000);

console.log("=====================Koa2 Server Started on Port 3000======================");