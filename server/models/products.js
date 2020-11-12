
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
        else resolve(result);
      })
    });
}


module.exports = {
  createProduct
}