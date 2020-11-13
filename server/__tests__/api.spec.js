
const {app} = require(__dirname + "/../index.js");
const supertest = require("supertest");
const request = supertest(app);



app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});



it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

// it("Async test", async done => {
//   // requests here

//   done();
// });

app.get('/api/products', async (req, res) => {
  res.json({ message: "pass!" });
});

// app.get('/api/products', products_controller.getAll);
// app.get('/api/products/id=:id', products_controller.getById);
// app.get('/api/products/similar/id=:id', products_controller.getSimilarDescription);

// app.get('/api/ratings', ratings_controller.getAll);
// app.get('/api/ratings/count/product_id=:id', ratings_controller.getCountByProduct);
// app.get('/api/ratings/avg/product_id=:id', ratings_controller.getAvgRatingByProduct);