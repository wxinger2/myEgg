'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const res = await this.service.user.findUser();
        console.log(res)
        this.ctx.body = 'hi, egg';
    }
    async news() {
        const { ctx } = this;
        ctx.body = 'hi, news';
        this.app.config.coreMiddleware.unshift('report');
        const list = [
            { id: 1, title: 'this is news 1', url: '/news/1' },
            { id: 2, title: 'this is news 2', url: '/news/2' }
        ];
    }
}

module.exports = HomeController;