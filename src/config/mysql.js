const mysql = require('mysql2');

const {
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_HOSTNAME,
    MYSQL_PORT,
    MYSQL_PASSWORD,
  } = process.env;

var dbConn = mysql.createConnection({
    host: MYSQL_HOSTNAME,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
});

dbConn.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
})