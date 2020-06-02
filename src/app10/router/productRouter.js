const Router = require('@koa/router');
const productRouter = new Router();
const productController = require('../controller/productController');
const userRequestUrlMappingResolver = require('../config/client/productRequestUrlMappingResolver');
productRouter.get(userRequestUrlMappingResolver.search, productController.searchProduct);
module.exports = productRouter;