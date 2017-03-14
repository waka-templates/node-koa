'use strict';
module.exports = {
    //common config
    //...

    //config for different environment
    development:{
{{#mysql}}
        db: {
            username: '',
            database: '',
            host: '',
            port: 0,
            dialect: 'mysql',
            pool: {
                max: 100,
                min: 0,
                idle: 10000
            }
        },
{{/mysql}}
{{#tair}}
        tair: {
            server: [
                {
                    'host': '',
                    'port': 0
                },
                {
                    'host': '',
                    'port': 0
                }
            ],
            namespace: 0,
            group: ''
        }
{{/tair}}
    },
    staging:{},
    production:{}
};