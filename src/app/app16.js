const dns = require('dns');

const domain = 'www.baidu.com';
dns.resolve(domain, function (error, address) {
    if(error){
        console.log(error);
        return;
    }
    console.log(address);
});
