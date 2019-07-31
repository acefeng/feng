const BaseControllers = require('../base/index');
const n_env = process.env.NODE_ENV == 'development';
const TestServices = require('../../services/test/index');

class testControllers extends BaseControllers{
  async getIndex(ctx){
    const testServices = new TestServices();
    await testServices.addUser("此处11111");
    await ctx.render('pages/test', {
        title: '后台商品管理系统',
        n_env,
        global: JSON.stringify({
          a: 123,
          b: 456
        })
    });
  }
}

module.exports = testControllers;
