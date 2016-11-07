const request = require('request');

const PingService = function () {};

PingService.prototype.ping = (service, callback) => {
    let startTime = +new Date();
    request.get({
        method: 'GET',
        uri: service.url + ':' + service.port + (service.path ? '/' + service.path : '')
    }, (err, response, body) => {
        return callback(err, body, response, +new Date() - startTime);
    });
}

PingService.prototype.getDefaultOptions = () => {
    return {};
}

module.exports = PingService;
