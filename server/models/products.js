const { connection } = require('../../database/db.js');

function createProduct(data) {
  const values = [
    data.product_name,
    data.image_one_url,
    data.image_two_url,
    data.page_url,
    data.price,
    data.hearted,
    data.brief_description,
    data.collection_name,
  ];
  const statement = `
    INSERT INTO products
    (product_name, image_one_url, image_two_url,
      page_url, price,hearted, brief_description,
      collection_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
  return new Promise((resolve, reject) => {
    connection.query(statement, values, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
}

function getAll() {
  const statement = 'SELECT * FROM products';
  return new Promise((resolve, reject) => {
    connection.query(statement, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
}

function getById(id) {
  const statement = 'SELECT * FROM products WHERE id=?';
  const values = [id];
  return new Promise((resolve, reject) => {
    connection.query(statement, values, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
}

function getSimilarDescription(id) {
  const firstStatement = 'SELECT brief_description FROM products WHERE id=?;';
  const secondStatement = 'SELECT * FROM products WHERE MATCH(brief_description) AGAINST(?) LIMIT 12;';
  return new Promise((resolve, reject) => {
    connection.query(firstStatement, [id], (err, [product]) => {
      if (err) return reject(err);
      return connection.query(secondStatement, [product.brief_description], (error, result) => {
        if (error) return reject(err);
        return resolve(result);
      });
    });
  });
}

function getSimilarCollection(id) {
  const firstStatement = 'SELECT collection_name FROM products WHERE id=?;';
  const secondStatement = 'SELECT * FROM products WHERE collection_name=? LIMIT 12;';
  return new Promise((resolve, reject) => {
    connection.query(firstStatement, [id], (err, [product]) => {
      if (err) return reject(err);
      return connection.query(secondStatement, [product.collection_name], (error, result) => {
        if (error) return reject(err);
        return resolve(result);
      });
    });
  });
}

module.exports = {
  createProduct,
  getAll,
  getById,
  getSimilarDescription,
  getSimilarCollection,
};
