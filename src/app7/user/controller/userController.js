const userService = require('../service/userService');
const uuid = require('uuid');

class UserController {
    async userLogin(username,password){
        const userId = username;
        const userSessionId = uuid.v1();
        await userService.storeUserId(userSessionId, userId);
    }

    async userLogout(userSessionId) {
        await userService.removeUserSessionByUserSessionId(userSessionId);
    }

    async userOtherOperation(userSessionId) {
        const userId = userService.getUserIdFromUserSessionByUserSessionId(userSessionId);

        console.log('userId from Controller: ' + userId);

        await userService.resetUserSessionExpirationTime(userSessionId);
    }
}

module.exports = new UserController();