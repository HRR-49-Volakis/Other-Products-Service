
const { connection } = require(__dirname + '/../../database/db.js');


function createRating(data) {
  // auto generated id, data = [user_id(1-200), rated_product(1-100), stars_given(1-5)]
  const values = [
    data.user_id,
    data.rated_product,
    data.stars_given
  ];
  const statement = `
    INSERT INTO ratings (user_id, rated_product, stars_given)
    VALUES (?, ?, ?);`;
  return new Promise ((resolve, reject)=>{
    connection.query(statement, values, (err, result) =>{
      if(err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = {
  createRating
}