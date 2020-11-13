
const { connection } = require(__dirname + '/../../database/db.js');


function createUser(data) {
  const values = [
    data.username
  ]
  const statement = `INSERT INTO users (username) VALUES (?);`;


  return new Promise((resolve, reject) => {
    connection.query(statement, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    })
  })

}

module.exports = {
  createUser
}