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
        host: 'mysql',
        port: '3306',
        define: {
            timestamps: false
        }
    }
)

module.exports = sequelize