/**
 * @Creator: Liuyanqing
 * @Date: 3/14/17
 */
'use strict';

let service = require('../service/index');
{{#tair}}
let tair = require('../lib/tair');
{{/tair}}
module.exports.register = function (app) {
    app.context.service = service;
    {{#tair}}
    app.context.tair = tair;
    {{/tair}}
};

