const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('./controllers/products.js');
const ratingsController = require('./controllers/ratings.js');

const publicFolder = path.join(__dirname, '/../public/');
const app = express();

app.use(bodyParser.json());

app.get('/api/products', productsController.getAll);
app.get('/api/products/id=:id', productsController.getById);
app.get('/api/products/similar/id=:id', productsController.getSimilarDescription);

app.get('/api/ratings', ratingsController.getAll);
app.get('/api/ratings/count/product_id=:id', ratingsController.getCountByProduct);
app.get('/api/ratings/avg/product_id=:id', ratingsController.getAvgRatingByProduct);

app.use(express.static(publicFolder));

module.exports = {
  app,
};
