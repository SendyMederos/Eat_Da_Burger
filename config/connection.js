var mysql = require("mysql");
var password = require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "burger_db"
  });
};

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;