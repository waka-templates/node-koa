'use strict';
var Router = require('koa-router');
var router = new Router();

require('./home.js').register(router);

module.exports.register = function (app) {
    app.use(router.middleware());
};