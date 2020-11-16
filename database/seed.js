const faker = require('faker');
const { exec } = require('child_process');
const { connection } = require('./db.js');
const config = require('../config');
const productsModel = require('../server/models/products.js');
const ratingsModel = require('../server/models/ratings.js');
const usersModel = require('../server/models/users.js');
const imagePool = require('./imagePool.js');

const user = config.prod_username || config.dev_username;
const pass = config.prod_password || config.dev_password;

function addRandomImagePair(data) {
  const keys = Object.keys(imagePool);
  const urls = imagePool[keys[Math.floor(Math.random() * keys.length)]];
  const finishedData = data;
  finishedData.image_one_url = urls.url_one;
  finishedData.image_two_url = urls.url_two;
  return finishedData;
}

function generateFakeData(model) {
  let data;
  if (model === 'rating') {
    data = {
      user_id: faker.random.number({ min: 1, max: 200 }),
      rated_product: faker.random.number({ min: 1, max: 100 }),
      stars_given: faker.random.number({ min: 1, max: 5 }),
    };
  } else if (model === 'user') {
    data = {
      username: faker.internet.userName(),
    };
  } else if (model === 'product') {
    const name = faker.commerce.product();
    const description = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}, ${faker.random.number(50)} cm`;
    const unfinishedData = {
      product_name: name,
      page_url: faker.internet.url(),
      price: (faker.random.number(40) * 5),
      hearted: faker.random.boolean(),
      brief_description: description,
      collection_name: faker.commerce.department(),
    };
    data = addRandomImagePair(unfinishedData);
  }
  return data;
}

function initEmptyDb() {
  return new Promise((resolve, reject) => {
    exec(`mysql -u ${user} < database/schema.sql -p${pass}`, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(error);
      return resolve(`stdout: ${stdout}`);
    });
  });
}

async function seedProducts() {
  const results = [];
  for (let i = 0; i < 100; i += 1) {
    const data = generateFakeData('product');
    const result = await productsModel.createProduct(data);
    results.push(result);
  }
  return results;
}

async function seedUsers() {
  const results = [];
  for (let i = 0; i < 200; i += 1) {
    const data = generateFakeData('user');
    const result = await usersModel.createUser(data);
    results.push(result);
  }
  return results;
}

async function seedRatings() {
  const results = [];
  for (let i = 0; i < 1000; i += 1) {
    const data = generateFakeData('rating');
    const result = await ratingsModel.createRating(data);
    results.push(result);
  }
  return results;
}

initEmptyDb()
  .then(() => seedProducts()) // console.log('initialized empty ikea database', result);
  .then(() => seedUsers()) // console.log('successfully added ', results.length, 'products');
  .then(() => seedRatings())// console.log('successfully added ',results.length, 'users');
  .catch((err) => {
    throw err;
  })
  .then(() => connection.end());
