// const mongo = require('mongodb');
// const mongoose = require('mongoose');
// const { db } = require('./index.js');

// const productSchema = new mongoose.Schema({
//   id: Number,
//   product_name: String,
//   image_one_url: String,
//   image_two_url: String,
//   page_url: String,
//   price: Number,
//   hearted: Boolean,
//   brief_description: String,
//   collection_name: String
// });

// const ratingSchema = new mongoose.Schema({
//   id: Number,
//   rated_product: Number,
//   stars_given: Number
// })

// const Product = mongoose.model('Product', productSchema);
// const Rating = mongoose.model('Rating', ratingSchema);

// const func = function(values) {
//   Rating.insertMany(values, function(err, result) {
//     if (err) {
//       console.log('ERROR---', err);
//     } else {
//       console.log('Documents successfully inserted. Number of insertions: ', result.insertedCount);
//     }
//   })
// }


// // need to export the models in order to acces it in other files?
// module.exports = {
//   func
// }