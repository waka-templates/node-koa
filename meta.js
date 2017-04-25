module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'project name'
        },
        description: {
            type: 'string',
            message: 'description',
            default: 'a node website backend'
        },
        author: {
            type: 'string',
            message: 'author',
            required: true
        },
        pm2: {
            type: "confirm",
            message: "create pm2 deploy config file?"
        },
        tair: {
            type: "confirm",
            message: "need tair?"
        },
        mysql: {
            type: 'confirm',
            message: 'need mysql database?'
        },
        sentry: {
            type: 'confirm',
            message: 'need sentry?'
        },
        oauth: {
            type: "confirm",
            message: "need neixin/大象 oauth?"
        },
        pug: {
            type: 'confirm',
            message: 'add pug/jade template engine? (swig is build-in already)'
        }
    },
    filters:{
        'deploy/pm2/*':'pm2',
        'lib/tair.js':'tair',
        'service/db/*':'mysql',
        'service/use_db_demo/*':'mysql',
        'lib/sentry.js':'sentry',
        'views/home/author.pug':'pug',
        'router/auth.js':'oauth'
    },
    completeMessage: "init project successfully. \n read more in readme.md"
};
