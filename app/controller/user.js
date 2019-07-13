'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async echo() {

    }
    async index() {
        const { ctx } = this;
    }
}

module.exports = UserController;