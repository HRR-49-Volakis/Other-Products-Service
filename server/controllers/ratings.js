const ratingsModel = require('../models/ratings.js');

function getAll(req, res) {
  ratingsModel.getAll()
    .then((results) => res.send(results))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
}

function getCountByProduct(req, res) {
  ratingsModel.getCountByProduct(req.params.id)
    .then((results) => res.send(results))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
}

function getAvgRatingByProduct(req, res) {
  ratingsModel.getAvgRatingByProduct(req.params.id)
    .then((results) => res.send(results))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
}

module.exports = {
  getAll,
  getCountByProduct,
  getAvgRatingByProduct,
};
