const faker = require('faker');
const { pool } = require('./index.js');
const pgf = require('pg-format');

// ratings
var values = [];
var counter = 0;
var num = 1;
while (counter < 10) {
  for (var i = num; i < (num + 1000); i++) {

    var rated_product =  faker.random.number({ min: 1, max: 1000});
    var stars_given = faker.random.number({ min: 1, max: 5});

    values.push([rated_product, stars_given]);
  }

  var queryStr = 'INSERT INTO ratings (rated_product, stars_given) VALUES ?;'
  // console.log('HERE');
  pool.query(queryStr, values, (err, res) => {
    if (err) {
      console.log('ERROR in insertions---', err)
    } else {
      console.log('successful insertions')
    }
  })

  values = [];
  counter++;
  num += 1000;
}
