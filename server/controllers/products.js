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

function getSimilarCollection(req, res) {
  productsModel.getSimilarCollection(req.params.id)
    .then((results) => res.send(results))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
}

// post
function addProduct(req, res) {
  productsModel.addProduct(req.body)
    .then(() => {})
    .catch((err) => {
      res.status(400);
      res.send(err);
    })
}

// update
function updateProduct(req, res) {
  productsModel.updateProduct(req.params.id, req.body)
    .then(console.log('SUCCESS in update'))
    .catch((err) => {
      res.status(400);
      res.send(err);
    })
}

//delete
function deleteProduct(req, res) {
  productsModel.deleteProduct(req.params.id)
    .then(console.log('SUCCESS in deletion'))
    .catch((err) => {
      res.status(400);
      res.send(err);
    })
}

module.exports = {
  getAll,
  getById,
  getSimilarDescription,
  getSimilarCollection,
  addProduct,
  updateProduct,
  deleteProduct
};
