const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");
// console.log('DB:')
// console.log(mysql, dbConfig)
var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;