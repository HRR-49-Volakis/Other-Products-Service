const {app} = require(__dirname + './index.js');
app.listen(PORT, (err, result)=> {
  if (err) return console.log('eror starting express msg-', err.message);
  console.log('Express server listening on port-', PORT);
})