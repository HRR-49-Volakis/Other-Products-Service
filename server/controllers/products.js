const products_model = require(__dirname + '/../models/products.js');

function getAll(req, res) {
  products_model.getAll()
    .then(results => res.send(results))
    .catch(err => {
      console.log('Failed to getAll products msg', err.message);
      res.status(500)
      res.end();
    });
}

function getById(req, res) {
  products_model.getById(req.params.id)
    .then(results => res.send(results))
    .catch(err => {
      console.log('Failed to getById products msg-', err.message);
      res.status(500);
      res.end();
    })
}


module.exports = {
  getAll,
  getById
}