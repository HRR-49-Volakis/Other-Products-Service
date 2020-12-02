const mysql = require('mysql');

const connection = mysql.createConnection({

  user: 'root',
  password: '',
  database: 'ikea',
});

connection.connect();
module.exports.connection = connection;
