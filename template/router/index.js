'use strict';
var Router = require('koa-router');
var router = new Router();

require('./home.js').register(router);
{{#oauth}}
require('./auth.js').register(router);
{{/oauth}}
module.exports.register = function (app) {
    app.use(router.middleware());
};
