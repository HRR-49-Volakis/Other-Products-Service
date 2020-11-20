/* eslint-disable no-console */
const { app } = require('./index.js');

const PORT = 3001;
app.listen(PORT, (err) => {
  if (err) return console.log('eror starting express msg-', err.message);
  return console.log('Express server listening on port-', PORT);
});
