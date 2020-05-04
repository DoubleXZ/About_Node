const url = require('url');

const urlString = 'http://www.test.com/?orderId=111222';
const urlObject = url.parse(urlString);

console.log(urlObject);