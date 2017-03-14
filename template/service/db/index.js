'use strict';
var Sequelize = require('sequelize');
var config = require('../../lib/config');
var dbOptions = config.getDbConfig();
var client = new Sequelize(
    dbOptions.database,
    dbOptions.username,
    dbOptions.password, {
        host: dbOptions.host,
        dialect: dbOptions.dialect,
        port: dbOptions.port,
        pool: dbOptions.pool,
        logging: true
    });

module.exports = client;