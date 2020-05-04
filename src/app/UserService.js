class UserService{
    login(username, password) {
        console.log('entered UserService login method');
        console.log('info from UserService.login: ' + username + ', ' + password);
        return true;
    }
}
//此处应该导出的是一个类对象
module.exports = new UserService();