'use strict';
var koa = require('koa');
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var path = require('path');
var koaJson = require('koa-json');
var bodyParser = require('koa-bodyparser');
var controller = require('./router');
var env = require('./lib/config').getEnv();

var app = koa();

app.use(bodyParser());
app.use(koaJson());
app.use(serve(path.join(__dirname, 'public')));
app.use(compress());
app.use(logger());
controller.register(app);

try {
    if (env === "development") {
        app.listen(9000,()=>{
            console.log('server listening on port 9000');
        });
    } else {
        app.listen(8080,()=>{
            console.log('server listening on port 8080');
        });
    }
} catch (err) {
    console.log(err);
}