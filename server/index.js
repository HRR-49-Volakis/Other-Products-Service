const express = require('express');
const bodyParser = require('body-parser');

const config = require('/config');


const app = express();
const port = config.prod_port || config.dev_port;

app.use(bodyParser.json());

//app.use(express.startic())

// app.get('/api/products', req, res) => {

// }