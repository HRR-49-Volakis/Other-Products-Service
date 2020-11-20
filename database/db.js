const mysql = require('mysql');
if (!process.env.DEPLOYED) {
  const config = require('../config.js');
}

const connection = mysql.createConnection({
  host: config.prod_uri || config.dev_host,
  user: config.prod_username || config.dev_username,
  password: config.prod_password || config.dev_password,
  database: 'ikea',
});

connection.connect();
module.exports.connection = connection;
