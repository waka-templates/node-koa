
#### 启动服务
* cd 项目目录
* npm i 
* 如果需要, 配置/config.js文件
* npm run start
* 访问127.0.0.1:9000

#### 静态资源服务
* 静态资源放在public文件夹下, eg: 放在public/image下面的图片demo.jpg, 访问路径是/image/demo.jpg。 使用示例参考/views/home/index.html


#### 前端模板引擎
* 内置支持swig
* 脚手架初始化时可配置支持pug(jade)
* 欲使用其他模板引擎，可通过简单的方式自行设置，以ejs为例:
    * package.json添加对ejs的依赖
    * views目录下添加文件时以.ejs为文件拓展名
    * 然后在router中即可正常render页面了: this.render('./xxx/xxx.ejs',{})
* 更多模板引擎参见 https://github.com/tj/consolidate.js 

{{#tair}}
#### 使用tair
* 在config.js文件中, 按照模板配置tair集群的地址
{{/tair}}

{{#mysql}}
#### 使用Mysql
* 在config.js文件中, 按照模板配置Mysql数据库信息，Mysql使用sequelize做ORM, 使用示例参考/service/use_db_demo/index.js，更多用法参见http://docs.sequelizejs.com
{{/mysql}}

{{#sentry}}
#### 使用Sentry
* 在config.js文件中, 配置sentryDSN地址。上报异常信息时使用/lib/sentry.js中的sendLog方法。 上报的信息可在sentry平台统一查看。
{{/sentry}}