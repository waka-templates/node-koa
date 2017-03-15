/**
 * @Creator: Liuyanqing
 * @Date: 3/14/17
 */
'use strict';
let render = require('../lib/render.js');
let service = require('../service/index');
{{#tair}}
let tair = require('../lib/tair');
{{/tair}}
{{#sentry}}
let sentry = require('../lib/sentry');
{{/sentry}}
module.exports.register = function (app) {
    app.context.render = render;
    app.context.service = service;
    {{#tair}}
    app.context.tair = tair;
    {{/tair}}
    {{#sentry}}
    app.context.sentry = sentry;
    {{/sentry}}
};

