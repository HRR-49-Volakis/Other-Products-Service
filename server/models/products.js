
const { connection } = require(__dirname + '/../../database/db.js');


function createProduct(data) {
  const values = [
      data.product_name,
      data.image_one_url,
      data.image_two_url,
      data.page_url,
      data.price,
      data.hearted,
      data.brief_description,
      data.collection_name
  ]
  const statement = `
    INSERT INTO products
    (product_name, image_one_url, image_two_url,
      page_url, price,hearted, brief_description,
      collection_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
    return new Promise((resolve, reject) => {
      connection.query(statement, values, (err, result) => {
        if(err) return reject(err);
        resolve(result);
      })
    });
};

function getAll() {
  const statement = `SELECT * FROM products`;
  return new Promise((resolve, reject) => {
    connection.query(statement, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  });
};

function getById(id) {
  const statement = `SELECT * FROM products WHERE id=?`;
  const values = [id];
  return new Promise((resolve, reject) => {
    connection.query(statement, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  });
};

function getSimilarDescription(id) {
  const first_statement = `SELECT brief_description FROM products WHERE id=?;`;
  const second_statement = `SELECT * FROM products WHERE MATCH(brief_description) AGAINST(?);`;
  return new Promise((resolve, reject) => {
    connection.query(first_statement, [id], (err, [product]) => {
      if (err) return reject(err);
      connection.query(second_statement, [product.brief_description], (err, result) =>{
        if (err) return reject(err);
        resolve(result);
      });
    });
  });
};





module.exports = {
  createProduct,
  getAll,
  getById,
  getSimilarDescription
}