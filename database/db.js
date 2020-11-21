const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cheeze',
  database: 'ikea',
});

connection.connect();
module.exports.connection = connection;
