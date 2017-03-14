'use strict';
let views = require('co-views');
let env = process.env.NODE_ENV || 'development';

module.exports = views(__dirname + '/../views', {
    map: { html: 'swig' },  cache : env !== 'production' ? false : 'memory'
});