const Service = require('egg').Service;

class HomeService extends Service {
    async find(user_id) {
      const results = await this.app.mysql.query('select * from user where user_id = 1', [1, user_id]);
      return { results };
    }
}
module.exports = HomeService;