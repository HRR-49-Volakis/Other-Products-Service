// generate data using faker
// write the data into csv file
  // let fs = require('fs');
  // let writer = fs.createWriteStream('ratings.csv');
  // writer.write('content');

//read the file and convert into [ {json} ]
  //readFileSync

// export the array

const faker = require('faker');
const fs = require('fs');
// const { db } = require('./index.js');
const imagePool = require('../database/imagePool.js');
const { Rating } = require('./index.js');
const mongoose = require('mongoose');

//----ratings------------
// not using csv
// insertMany small batches of documents
var values = [];
var counter = 0;
var num = 1;
while (counter < 100) {
  for (var i = num; i < (num + 1000); i++) {
    var obj = {};
    obj.id = i;
    obj.rated_product =  faker.random.number({ min: 1, max: 1000});
    obj.stars_given = faker.random.number({ min: 1, max: 5});

    values.push(obj);
  }

  Rating.insertMany(values)
  .then(function() {
    console.log('successful insertions');
  })
  .catch(function(err) {
    console.log('ERROR---', err);
  })
  // console.log('HERE');
  values = [];
  counter++;
  num += 1000;
}

// var writer = fs.createWriteStream('./ratings.csv');
// var header = 'id, rated_product, stars_given\n';
// var body = '';
// // create a string of data
// for (var i = 0; i < 10; i ++) {
//   var id = i;
//   var rated = faker.random.number({ min: 1, max: 100});
//   var stars = faker.random.number({ min: 1, max: 5});
//   body += id + ',' + rated + ',' + stars + '\n';
// }
// var data = header + body;
// writer.write(data);

// // csv parse into array of values for insertmany query
// var reader = fs.createReadStream('./ratings.csv');

// var values;
// reader.on('data', function (chunk) {
//   var str = chunk.toString();
//   values = csvParse(str);
//   console.log('-----values---', values);

//   // Rating.insertMany(values)
//   //   .then(function() {
//   //     console.log("successful insertions")
//   //   })
//   //   .catch(function(err) {
//   //     console.log('ERROR', err)
//   //   });
// })

// const streamToString = function (stream) {
//   const chunks = '';
//   return new Promise((resolve, reject) => {
//     stream.on('data', chunks += chunk.toString());
//     stream.on('error', reject)
//     stream.on('end', () => ));
//   })
// }

// const result = await streamToString(reader);

// const csvParse = function (csv) {
//   var lines = csv.split('\n');  //array
//   var header = lines.shift().split(',');
//   return lines.map(line => {
//     var contents = line.split(',');
//     var obj = {};
//     header.forEach((h, c) => obj[h] = contents[c]);
//     return obj;
//   })
// }


// //------products-------------
// var writer2 = fs.createWriteStream('./products.csv');
// var header2 = 'id, product_name, image_one_url, image_two_url, page_url, price, hearted, brief_description, collection_name\n';
// var body2 = '';

// function addRandomImagePair() {
//   var data = {};
//   const keys = Object.keys(imagePool);
//   const urls = imagePool[keys[Math.floor(Math.random() * keys.length)]];
//   data.image_one_url = urls.url_one;
//   data.image_two_url = urls.url_two;
//   return data;
// }

// var images = addRandomImagePair();

// for (var i = 0; i < 100; i++) {
//   var id = i;
//   var product_name = faker.commerce.product();
//   var image_one_url = images.image_one_url;
//   var image_two_url = images.image_two_url;
//   var page_url = 'https://www.ikea.com/au/en/p/djungelskog-soft-toy-brown-bear-20402831/';
//   var price = ((faker.random.number(40) * 5) + 10);
//   var hearted = faker.random.boolean();
//   var brief_description = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}, ${faker.random.number(50)} cm`;
//   var collection_name = faker.commerce.department();
//   body += id + ',' + product_name + ',' + page_url + ',' + price + ',' + hearted + ',' + brief_description + ',' + collection_name + '\n';
// }
// var data2 = header2 + body2;
// writer2.write(data2);


// module.exports = {
//   values
// }