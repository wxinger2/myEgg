/* eslint valid-jsdoc: "off" */

'use strict';
const mongoose = require('mongoose');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1562462326934_9666';




    // add your middleware config here
    config.middleware = ['auth', 'gzip'];


    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.view = {
        mapping: {
            '.html': 'nunjucks',
        }
    };

    //配置mongoose
    config.mongoose = {
        client: {
            url: 'mongodb://127.0.0.1:27017/productManage',
            options: {},
        },
    };

    return {
        ...config,
        ...userConfig,
    };
};
exports.keys = 'y_1562462326934_9666';