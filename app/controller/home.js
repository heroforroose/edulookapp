const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const results = await this.ctx.service.home.find(1);
        console.log(results);
        this.ctx.body = results;
    }
}

module.exports = HomeController;