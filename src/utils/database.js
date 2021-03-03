const Sequelize = require('sequelize');
const {
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_HOSTNAME,
    MYSQL_PORT,
    MYSQL_PASSWORD,
  } = process.env;
const sequelize = new Sequelize(
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD, {
        dialect: 'mysql',
        host: MYSQL_HOSTNAME,
        port: MYSQL_PORT
    }
)

module.exports = sequelize