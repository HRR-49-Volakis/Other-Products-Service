const productsModel = require('../models/products.js');

function getAll(req, res) {
  productsModel.getAll()
    .then((results) => res.send(results))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
}

function getById(req, res) {
  productsModel.getById(req.params.id)
    .then((results) => res.send(results))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
}

function getSimilarDescription(req, res) {
  productsModel.getSimilarDescription(req.params.id)
    .then((results) => res.send(results))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
}

module.exports = {
  getAll,
  getById,
  getSimilarDescription,
};
