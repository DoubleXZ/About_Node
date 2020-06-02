const qs = require('qs');
const baseHttpClient = require('../common/baseHTTPClient');
const productRequestUrlMappingResolver = require('../config/client/productRequestUrlMappingResolver');
//console.log('Start execute productController...');
class ProductController {
    async searchProduct(ctx) {
        const requestUrl = productRequestUrlMappingResolver.search;
        console.log('In ProductController:client request info: ' + ctx.request.method + ' ' + requestUrl);
        console.log('In ProductController:client request body is ' + JSON.stringify(ctx.request.body));
        const response = await baseHttpClient.doHttpGetRequest(ctx, requestUrl, JSON.stringify(ctx.request.body));
        const responseData = qs.parse(response.data);
        console.log('In ProductController: response data is ' + JSON.stringify(responseData));
        const responseDataCode = responseData.result.code;

        if (0 === responseDataCode) {
            ctx.body = responseData;
        }else {
            ctx.body = responseData;
        }
    }
}

//console.log('End execute productController...');
module.exports = new ProductController();