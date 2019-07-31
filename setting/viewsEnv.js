const nunjucks = require('nunjucks')
const views = require('koa-views')
const path = require('path')
const config = require('../client/config/index')
module.exports = function (app){
  if(process.env.NODE_ENV == 'development') {
    nunjucks.configure([path.resolve(__dirname, '../server/views/pages'), path.resolve(__dirname, '../server/views/common')], { autoescape: true });
    app.use(views(path.resolve(__dirname, '../server/views'), {
      map: {
        html: 'nunjucks'
      },
      options: {
        checkEnv(fileName) {
          return `<script src=//localhost:${config.dev.port}/dist${fileName}></script>`
        }
      }
    }))
  } else {
    nunjucks.configure([path.join(__dirname + '/../public/views/pages'), path.join(__dirname + '/../public/views/common')], { autoescape: true });
    app.use(views(path.resolve(__dirname + '/../public/views'), {
      map: {
        html: 'nunjucks'
      },
      options: {
        checkEnv(fileName) {
          return `<script src=/js${fileName}></script>`
        }
      }
    }))
  }
}