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
    return console.log(err);
  })
  .then(()=>{
    connection.end();
  });


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
  const results = [];
  for(let i = 0; i < 100; i++) {
    const data = generateFakeData('product');
    try {
      let result = await products_model.createProduct(data);
      results.push(result);
    } catch (err) {
      return console.log(err.message)
    }
  }
  return results;
}

async function users_seed() {
  const results = [];
  for (let i = 0; i < 200; i++) {
    const data = generateFakeData('user');
    try {
      let result = await users_model.createUser(data);
      results.push(result);
    } catch (err) {
      return console.log(err.message)
    }
  }
  return results;
}

async function ratings_seed() {
  const results = [];
  for(let i = 0; i < 1000; i++) {
    let data = generateFakeData('rating');
    try {
      let result = await ratings_model.createRating(data);
      results.push(result);
    } catch (err) {
      return console.log(err.message)
    }
  }
  return results;
}


function generateFakeData(model) {
  if (model === 'rating') {
    let data = {
      user_id: faker.random.number({'min':1, 'max':200}), //user_id
      rated_product: faker.random.number({'min':1, 'max':100}), //rated_product
      stars_given: faker.random.number({'min':1, 'max':5}) //stars_given
    }
    return data;
  }
  if (model === 'user') {
    let data = {
      username: faker.internet.userName()
    }
    return data;
  }
  if (model === 'product') {
    const data = {
      product_name: faker.commerce.productName(),
      page_url: faker.internet.url(),
      price: faker.random.number(),
      hearted: faker.random.boolean(),
      brief_description: faker.commerce.productDescription(),
      collection_name: faker.commerce.department()
    };
    addRandomImagePair(data);
    return data;
  }
}

function addRandomImagePair(data) {
  let keys = Object.keys(imagePool);
  let urls = imagePool[keys[Math.random() * keys.length << 0]];
  data.image_one_url = urls.url_one
  data.image_two_url = urls.url_two;
}

const imagePool = {
  table_one: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/aepplaroe-table-6-chairs-armr-bench-outdoor-brown-stained__0317089_PE515111_S5.jpeg',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/aepplaroe-table-6-chairs-armr-bench-outdoor-brown-stained__0667545_PE713955_S5.webp'
  },
  shark: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/blahaj-soft-toy-shark__0710175_PE727378_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/blahaj-soft-toy-shark__0877368_PE633607_S5.webp'
  },
  bear: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/djungelskog-soft-toy-brown-bear__0710168_PE727370_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/djungelskog-soft-toy-brown-bear__0877169_PE662334_S5.webp'
  },
  table_two: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/ekedalen-extendable-table-oak__0736969_PE740833_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/ekedalen-extendable-table-oak__0871539_PE640620_S5.webp'
  },
  basket_one: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/lustigkurre-basket-natural-jute__0922223_PE788091_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/lustigkurre-basket-natural-jute__0957733_PE805110_S5.webp'
  },
  basket_two: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/lustigkurre-basket-natural-water-hyacinth-seagrass__0922247_PE788098_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/lustigkurre-basket-natural-water-hyacinth-seagrass__0944294_PE797232_S5.jpeg'
  },
  trolly: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/raskog-trolley-white__0503386_PE632627_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/raskog-trolley-white__0870535_PE644566_S5.webp'
  },
  table_three: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/skogsta-dining-table-acacia__0946419_PH173655_S5.jpeg',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/skogsta-dining-table-acacia__0946421_PH173663_S5.webp'
  },
}