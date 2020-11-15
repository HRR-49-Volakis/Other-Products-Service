/* eslint-disable no-console */
const { app } = require('./index.js');
const config = require('../config.js');

const PORT = config.prod_port || config.dev_port;
app.listen(PORT, (err) => {
  if (err) return console.log('eror starting express msg-', err.message);
  return console.log('Express server listening on port-', PORT);
});
