const express = require('express');
const bodyParser = require('body-parser');
const db = require(__dirname + '/../database/db.js');
const config = require(__dirname + '/../config.js');
const products_controller = require(__dirname + '/controllers/products.js');
const ratings_controller = require(__dirname + '/controllers/ratings.js');

const app = express();
const PORT = config.prod_port || config.dev_port;

app.use(bodyParser.json());

app.get('/api/products', products_controller.getAll);
app.get('/api/products/id=:id', products_controller.getById);
app.get('/api/products/similar/id=:id', products_controller.getSimilarDescription);

app.get('/api/ratings', ratings_controller.getAll);
app.get('/api/ratings/count/product_id=:id', ratings_controller.getCountByProduct);
app.get('/api/ratings/avg/product_id=:id', ratings_controller.getAvgRatingByProduct);


app.use(express.static( __dirname + '/../public/'));
module.exports = {
  app
}

// move the below app.listen to start.js in order to use app in testing aswell

// app.listen(PORT, (err, result)=> {
//   if (err) return console.log('eror starting express msg-', err.message);
//   console.log('Express server listening on port-', PORT);
// })

