const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const path = require('path');
const routerBase = require('../config/routerBase');

const devGetStatic = require('../setting/devGetStatic');
const viewsEnv = require('../setting/viewsEnv');
const appSession = require('../setting/appSession');
const appLogger = require('../setting/appLogger');


viewsEnv(app); // 以下对于模板引擎进行操作
onerror(app); // 错误输出
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));
app.use(json());
app.use(require('koa-static')(path.join(__dirname + '/../public'))); // 静态文件
appSession(app); // koa实例的session控制
appLogger(app); // logger
if(process.env.NODE_ENV == 'development') app.use(devGetStatic);  // 对开发环境做的兼容代码
app.use(routerBase.routes(), routerBase.allowedMethods()); // routes
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
