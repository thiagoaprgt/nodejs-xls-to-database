const Sequelize = require('sequelize');

const sequelize = new Sequelize('thiago_db', 'root', 'dev', {
    dialect: 'mysql',
    host: 'localhost',
    port:13306
})


module.exports = sequelize;