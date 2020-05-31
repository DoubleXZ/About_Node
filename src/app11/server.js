/**
 * 充当app10的后端服务
 * @type {Application}
 */
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.response.type = 'application/json';

    const responseBody = {
        result: {
            code: 0,
            description: 'success'
        }, data: {
            username: '张三',
            address: 'taiyuan',
            age: 20
        }
    };

    ctx.body = JSON.stringify(responseBody);
});

app.listen(4000);
