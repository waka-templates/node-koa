/*
    简单演示数据库操作方法, 更多用法参见http://docs.sequelizejs.com
*/

'use strict';
var db = require('../db');
var Sequelize = require('sequelize');
module.exports = {
    getUserById: function* (id) {
        return yield db.query('select name from user where id = :id', {
            replacements: {
                id: id
            },
            type: Sequelize.QueryTypes.SELECT,
            raw: true
        });
    }
};