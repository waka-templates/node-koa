'use strict';
var render = require('../lib/render.js');

var HomeIndex = function* () {
    return this.body = yield render('./home/index',{
        project: "{{ name }}",
        author: "{{ author }}"
    });
};

module.exports.register = function (router) {
    router.get('/',HomeIndex);
    router.get('/home/index',HomeIndex)
};