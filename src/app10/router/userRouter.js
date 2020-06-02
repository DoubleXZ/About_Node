const Router = require('@koa/router');
const userRouter = new Router();
const userController = require('../controller/userController');
const userRequestUrlMappingResolver = require('../config/client/userRequestUrlMappingResolver');

//将请求路由映射到相应的Controller上
userRouter.post(userRequestUrlMappingResolver.login, userController.login);
module.exports = userRouter;