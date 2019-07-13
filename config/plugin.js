'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    mongoose: {
        enable: true,
        package: 'egg-mongoose',
    }
};
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};

// exports.mongoose = {
//     enable: true,
//     package: 'egg-mongoose',
// };