
const { connection } = require(__dirname + '/../../database/db.js');


function addProduct(data) {
  // let data = {
  //   product_name: faker.commerce.productName(),
  //   image_one_url: faker.image.imageUrl(),
  //   image_two_url: faker.image.imageUrl(),
  //   page_url: faker.internet.url(),
  //   price: faker.random.number(),
  //   avg_rating: faker.random.number({'min'1, 'max'5}),
  //   num_ratings: faker.random.number({'min'10, 'max'500}),
  //   hearted: faker.random.boolean(),
  //   brief_description: faker.commerce.productDescription(),
  //   collection_name: faker.commerce.department(),
  // }
  const statement = `
    INSERT INTO products
    (product_name, image_one_url, image_two_url,
      page_url, price,avg_rating, num_ratings,
      hearted, brief_description, collection_name)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    return new Promise((resolve, reject) => {
      connection.query(statement, data, (err, result) => {
        if(err) return reject(err);
        else resolve(result);
      })
    });

}

module.exports = {
  addProduct
}