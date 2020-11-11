const { connection } = require('./db.js');
const products_model = require('../server/models/products.js');
const faker = require('faker');
const { exec } = require("child_process");
const config = require('../config');

const user = config.prod_username || config.dev_username;
const pass = config.prod_password || config.dev_password;



seed();

function seed() {
  init()
    .then((result) =>{
      console.log('initialized empty ikea database', result);
      return products_seed();
    })
    .then((results) => {
      console.log('success fully added ', results.length, 'products');
    })
    .catch((err) => {
      console.log(err);
    })
}

function init() {
  return new Promise((resolve, reject) => {
    exec(`mysql -u ${user} < database/schema.sql -p${pass}`,(error, stdout, stderr) => {
      if (error) return reject(`error: ${error.message}`);
      if (stderr) return reject(`stderr: ${stderr}`);
      resolve(`stdout: ${stdout}`);
    });
  });
}


function products_seed() {
  const promises = [];
  for(let i = 0; i < 100; i++) {
    const data = [
      faker.commerce.productName(),
      faker.image.imageUrl(),
      faker.image.imageUrl(),
      faker.internet.url(),
      faker.random.number(),
      faker.random.number({'min':1, 'max':5}),
      faker.random.number({'min':10, 'max':500}),
      faker.random.boolean(),
      faker.commerce.productDescription(),
      faker.commerce.department()
    ];
    promises.push(products_model.addProduct(data))
  }
  return Promise.all(promises)
}


