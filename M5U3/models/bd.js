/*var mysql = require('mysql2');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.sql_host,
    user: process.env.sql_user,
    password: process.env.sql_password,
    database: process.env.sql_db_name   
});

pool.query = util.promisify(pool.query);

module.exports = pool; */

const sql = require('mssql/msnodesqlv8');

const config = {
  server: "BEASTWO", //process.env.SQL_HOST,
  database: "ejercicioM5U1Giuliani", //process.env.SQL_DB_NAME,
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    driver: "msnodesqlv8", 
    instanceName: "SQLEXPRESS" //process.env.SQL_INSTANCE_NAME
  },
};

module.exports={
    sql: sql,
    config: config
};