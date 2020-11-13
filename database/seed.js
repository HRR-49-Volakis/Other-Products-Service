const { connection } = require('./db.js');
const { exec } = require("child_process");
const faker = require('faker');
const config = require('../config');
const products_model = require('../server/models/products.js');
const ratings_model = require('../server/models/ratings.js');
const users_model = require('../server/models/users.js');


const user = config.prod_username || config.dev_username;
const pass = config.prod_password || config.dev_password;




init_empty_db()
  .then((result) =>{
    console.log('initialized empty ikea database', result);
    return products_seed();
  })
  .then((results) => {
    console.log('successfully added ', results.length, 'products');
    return users_seed();
  })
  .then((results) => {
    console.log('successfully added ',results.length, 'users');
    return ratings_seed()
  })
  .then((results) => {
    console.log('successfully added', results.length, 'ratings');
  })
  .catch((err) => {
    console.log(err);

  })

function init_empty_db() {
  return new Promise((resolve, reject) => {
    exec(`mysql -u ${user} < database/schema.sql -p${pass}`,(error, stdout, stderr) => {
      if (error) return reject(`error: ${error.message}`);
      if (stderr) return reject(`stderr: ${stderr}`);
      resolve(`stdout: ${stdout}`);
    });
  });
}

async function products_seed() {
  const promises = [];
  for(let i = 0; i < 100; i++) {
    const data = generateFakeData('product');
    try {
      let result = await products_model.createProduct(data);
      promises.push(result);
    } catch (err) {
      return console.log(err.message)
    }
  }
  return promises;
}

async function users_seed() {
  const promises = [];
  for (let i = 0; i < 200; i++) {
    const data = generateFakeData('user');
    try {
      let result = await users_model.createUser(data);
      promises.push(result);
    } catch (err) {
      return console.log(err.message)
    }
  }
  return promises;
}

async function ratings_seed() {
  const promises = [];
  for(let i = 0; i < 1000; i++) {
    const data = generateFakeData('rating');
    try {
      let result = await ratings_model.createRating(data);
      promises.push(result);
    } catch (err) {
      return console.log(err.message)
    }
  }
  return promises;
}


function generateFakeData(model) {
  if (model === 'rating') {
    const data = {
      user_id: faker.random.number({'min':1, 'max':200}), //user_id
      rated_product: faker.random.number({'min':1, 'max':100}), //rated_product
      stars_given: faker.random.number({'min':1, 'max':5}) //stars_given
    }
    return data;
  }
  if (model === 'user') {
    const data = {
      username: faker.internet.userName()
    }
    return data;
  }
  if (model === 'product') {
    const data = {
      product_name: faker.commerce.productName(),
      image_one_url: faker.image.imageUrl(),
      image_two_url: faker.image.imageUrl(),
      page_url: faker.internet.url(),
      price: faker.random.number(),
      hearted: faker.random.boolean(),
      brief_description: faker.commerce.productDescription(),
      collection_name: faker.commerce.department()
    };
    return data;
  }
}