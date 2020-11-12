const ratings_model = require(__dirname + '/../models/ratings.js');

function getAll(req, res) {
  ratings_model.getAll()
    .then(results => res.send(results))
    .catch(err => {
      console.log('Failed to getAll ratings msg-', err.message);
      res.status(500);
      res.end();
    })
}

function getCountByProduct(req, res) {
  ratings_model.getCountByProduct(req.params.id)
    .then(results => res.send(results))
    .catch(err => {
      console.log('Failed to getCountByProduct ratings msg-', err.message);
      res.status(500);
      res.end();
    })
}

function getAvgRatingByProduct(req, res) {
  ratings_model.getAvgRatingByProduct(req.params.id)
    .then(results => res.send(results))
    .catch(err => {
      console.log('Failed to getAvgRatingByProduct ratings msg-', err.message);
      res.status(500);
      res.end();
    })
}

module.exports = {
  getAll,
  getCountByProduct,
  getAvgRatingByProduct
}