const db = require('./index.js');

db.once('open', function() {
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


})