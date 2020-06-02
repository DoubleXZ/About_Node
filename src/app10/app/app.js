/**
 * 入口文件
 * @type {Application}
 */
const Koa = require('koa');
const path = require('path');
//用于汇总多个router
const combineRouters = require('koa-combine-routers');
//解析非Get请求的requestBody
const bodyParser = require('koa-bodyparser');
//解析静态文件
const koaStatic = require('koa-static');
//生产环境用于对请求进行压缩
const compress = require('koa-compress');

const app = new Koa();
//若有其他路由，则继续引入
const userRouter = require('../router/userRouter');
//const orderRouter = ...
const productRouter = require('../router/productRouter');
//若请求超过2K，则进行压缩
app.use(compress({
    threshold: 2048
}));
//显示引用bodyParser，一般放在靠前的位置
app.use(bodyParser());
//映射静态文件所在目录
app.use(koaStatic(path.join(__dirname, '../dist')));
//将所有router进行统一管理
const unifiedRouters = combineRouters(
    userRouter,
    productRouter
)();

app.use(unifiedRouters);

module.exports = app;