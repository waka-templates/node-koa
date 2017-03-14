
#### 启动服务
* cd 项目目录
* npm i 
* 如果需要, 配置/config.js文件
* npm run start
* 访问127.0.0.1:9000

#### 静态资源服务
* 静态资源放在public文件夹下, eg: 放在public/image下面的图片demo.jpg, 访问路径是/image/demo.jpg。 使用示例参考/views/home/index.html

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