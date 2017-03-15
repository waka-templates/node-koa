'use strict';
let views = require('co-views');
let env = process.env.NODE_ENV || 'development';

module.exports = views(__dirname + '/../views', {
{{#if pug}}
    map: { html: 'swig', pug: 'pug', jade: 'pug'}, default:'html', cache : env !== 'production' ? false : 'memory'
{{else}}
    map: { html: 'swig'}, default:'html', cache : env !== 'production' ? false : 'memory'
{{/if}}
});