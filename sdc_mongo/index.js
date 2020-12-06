const mongo = require('mongodb');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/sliders';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("---- Database created -----");
  }
})

const db = mongoose.connection;

db.once('open', function() {
  console.log('MongoDB connection successful');
})

const productSchema = new mongoose.Schema({
  id: Number,
  product_name: String,
  image_one_url: String,
  image_two_url: String,
  page_url: String,
  price: Number,
  hearted: Boolean,
  brief_description: String,
  collection_name: String
});

const ratingSchema = new mongoose.Schema({
  id: Number,
  rated_product: Number,
  stars_given: Number
})

const Product = mongoose.model('Product', productSchema);
const Rating = mongoose.model('Rating', ratingSchema);

// const func = function(values) {
//   Rating.insertMany(values, function(err, result) {
//     if (err) {
//       console.log('ERROR---', err);
//     } else {
//       console.log('Documents successfully inserted. Number of insertions: ', result.insertedCount);
//     }
//   })
// }

// const func = function(values) {
//   Rating.insertMany(values)
//     .then(function() {
//       console.log("successful insertions")
//     })
//     .catch(function(err) {
//       console.log('ERROR', err)
//     })
// };


module.exports = {
  db,
  // func,
  Rating
}

// db.db.dropDatabase(function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('database dropped');
  //   }
  // }