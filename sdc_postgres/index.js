const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  password: '',
  database: 'scrollers'
});

pool.on('error', function(err) {
  console.log('ERROR in connection', err);
})

module.exports = {
  pool
}