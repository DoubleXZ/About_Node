const url = require('url');

const urlObject = {
    'host': 'localhost',
    'port':'80',
    'protocal':'http',
    'search':'?orderId=11122223',
    'query':'orderId=11122223',
    'url':'/'
};

const urlString = url.format(urlObject);

console.log(urlString);