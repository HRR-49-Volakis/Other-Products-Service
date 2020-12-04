const { connection } = require('../../database/db.js');

function createRating(data) {
  // auto generated id, data = [user_id(1-200), rated_product(1-100), stars_given(1-5)]
  const values = [
    data.rated_product,
    data.stars_given,
  ];
  const statement = `
    INSERT INTO ratings (rated_product, stars_given)
    VALUES (?, ?);`;
  return new Promise((resolve, reject) => {
    connection.query(statement, values, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
}

function getAll() {
  const statement = 'SELECT * FROM ratings';
  return new Promise((resolve, reject) => {
    connection.query(statement, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
}

function getCountByProduct(id) {
  const statement = 'SELECT count(id) as times_rated FROM ratings WHERE rated_product=?;';
  const values = [id];
  return new Promise((resolve, reject) => {
    connection.query(statement, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}

function getAvgRatingByProduct(id) {
  const statement = 'SELECT AVG(stars_given) as average_stars FROM ratings WHERE rated_product = ?;';
  const values = [id];
  return new Promise((resolve, reject) => {
    connection.query(statement, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
}

module.exports = {
  createRating,
  getAll,
  getCountByProduct,
  getAvgRatingByProduct,
};
