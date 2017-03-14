/**
 * @Creator: Liuyanqing
 * @Date: 3/14/17
 */
'use strict';

var SENTRY_DSN = require('./config').getSentryDSN();
var raven = require('raven');
var client = new raven.Client(SENTRY_DSN);
client.on('error', function (e) {
    //   e.reason -- raw response body
    //   e.statusCode -- response status code
    //   e.response -- raw http response object
    console.log('sentry error:', e.statusCode, e.reason);
});
module.exports.sendLog = function (level, message) {
    client.captureMessage(message, {
        level: level
    });
};