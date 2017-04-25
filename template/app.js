'use strict';
const koa = require('koa');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const path = require('path');
const koaJson = require('koa-json');
const bodyParser = require('koa-bodyparser');
const controller = require('./router');
const cxt = require('./context/index');
const env = require('./lib/config').getEnv();
{{#oauth}}
const oauth = require('../index');
{{/oauth}}
const app = koa();

app.use(bodyParser());
app.use(koaJson());
{{#oauth}}
//不需要鉴权的路由配置
const ignorePath = {
    path: [],
    pathRegex: []
};
app.use(oauth('appKey','appSecret','http://127.0.0.1:9900/oauth/callback',ignorePath));
{{/oauth}}
app.use(serve(path.join(__dirname, 'public')));
app.use(compress());
app.use(logger());
controller.register(app);
cxt.register(app);

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
