'use strict';
var render = require('../lib/render.js');

var HomeIndex = function* () {

    {{#mysql}}
    //eg: use context.service
    //let data = yield this.service.demo.getUserById(57);
    {{/mysql}}

    {{#tair}}
    //eg: use context.tair
    // yield this.tair.setCache('demo-test-set','value-for-test');
    // let cache = yield this.tair.getCache('demo-test-set');
    {{/tair}}

    return this.body = yield render('./home/index',{
        project: "{{ name }}",
        author: "{{ author }}"
    });
};

module.exports.register = function (router) {
    router.get('/',HomeIndex);
    router.get('/home/index',HomeIndex)
};