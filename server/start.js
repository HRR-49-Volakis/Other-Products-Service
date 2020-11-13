const {app} = require(__dirname + '/index.js');
const config = require(__dirname + '/../config.js');

const PORT = config.prod_port || config.dev_port;
app.listen(PORT, (err, result)=> {
  if (err) return console.log('eror starting express msg-', err.message);
  console.log('Express server listening on port-', PORT);
})