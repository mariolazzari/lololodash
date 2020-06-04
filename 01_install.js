const _ = require("lodash");

module.exports = (users) => _.filter(users, (user) => user.active);
