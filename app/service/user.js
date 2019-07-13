'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async findUser() {
        console.log(this.app.model)
        const result = await this.ctx.model.User.find();
        return result;
    }
}

module.exports = UserService;