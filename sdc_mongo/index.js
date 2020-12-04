const mongo = require('mongodb');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/sliders';

mongoose.connect(url, {useNewUrlParser: true}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("---- Database created -----");
  }
})

const db = mongoose.connection;




module.exports.db = db;