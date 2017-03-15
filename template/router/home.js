'use strict';

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

    return this.body = yield this.render('./home/index',{
        project: "{{ name }}",
        author: "{{ author }}"
    });
};
{{#pug}}
var JadeDemo = function*() {
    return this.body = yield this.render('./home/author.pug',{
        user: {
            name: "{{ author }}",
            appearance: 'handsome'
        }
    });
};
{{/pug}}

module.exports.register = function (router) {
    router.get('/',HomeIndex);
    router.get('/home/swig',HomeIndex);
    {{#pug}}
    router.get('/home/pug_jade',JadeDemo);
    {{/pug}}
};