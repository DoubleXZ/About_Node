const qs = require('qs');
const baseHttpClient = require('../common/baseHTTPClient');
const userRequestUrlMappingResolver = require('../config/client/userRequestUrlMappingResolver');

//console.log('Start execute UserController...');
class UserController {
    async login(ctx) {
        const requestUrl = userRequestUrlMappingResolver.login;
        //console.log(ctx.request);
        console.log('In UserController:client request info: ' + ctx.request.method + ' ' + requestUrl);
        console.log('In UserController:client request body is ' + JSON.stringify(ctx.request.body));
        const response = await baseHttpClient.doHttpPostRequest(ctx, requestUrl, JSON.stringify(ctx.request.body));
        const responseData = qs.parse(response.data);
        console.log('In UserController: response dada is ' + JSON.stringify(responseData));
        const responseDataCode = responseData.result.code;

        if (0 === responseDataCode) {
            ctx.body = responseData;
        }else {
            ctx.body = responseData;
        }
    }
}
//console.log('End execute UserController...');
module.exports = new UserController();

