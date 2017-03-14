'use strict';
var config = require('../config.js');
var env = process.env.NODE_ENV || 'development';
module.exports = {
{{#mysql}}
    getDbConfig: function(){
        return config[env].db;
    },
{{/mysql}}
{{#tair}}
    getTairConfig: function () {
        return config[env].tair;
    },
{{/tair}}
{{#sentry}}
    getSentryDSN:function(){
        return config.SENTRY_DSN;
    },
{{/sentry}}
    getEnv: function () {
        return env;
    }
};