const Router = require('@koa/router');
const userRouter = new Router();
const userController = require('../controller/userController');
const userServerUrlMappingResolver = require('../config/server/userServerUrlMappingResolver');

//将请求路由映射到相应的Controller上
userRouter.post(userServerUrlMappingResolver.login, userController.login);

module.exports = userRouter;