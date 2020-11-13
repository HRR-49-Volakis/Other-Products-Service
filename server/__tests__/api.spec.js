
const {app} = require(__dirname + "/../index.js");
const supertest = require("supertest");

const st_request = supertest(app);

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

// app.get('/api/products', products_controller.getAll);
it('Should get the all products', async done => {
  const res = await st_request.get('/api/products');
  expect(res.status).toBe(200);
  expect(res.body.length).toEqual(100);
  done();
});

// app.get('/api/products/id=:id', products_controller.getById);
it('should get each product by its id', async done => {
  for (let i = 1; i <= 100; i++) {
    const res = await st_request.get(`/api/products/id=${i}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].id).toBe(i);
  }
  done();
});

// app.get('/api/products/similar/id=:id', products_controller.getSimilarDescription);
it('Should get a list of similar products given a product id', async done => {
  for (let i = 1; i <= 100; i++) {
    const res = await st_request.get(`/api/products/similar/id=${i}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  }
  done();
});

// app.get('/api/ratings', ratings_controller.getAll);
it('Should get all of the stored ratings', async done => {
  const res = await st_request.get(`/api/ratings`);
  expect(res.status).toBe(200);
  expect(res.body.length).toBe(1000);
  done();
});
// app.get('/api/ratings/count/product_id=:id', ratings_controller.getCountByProduct);
it('Should get a total number of ratings for a given product', async done => {
  for (let i = 1; i <= 100; i++) {
    const res = await st_request.get(`/api/ratings/count/product_id=${i}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  }
  done();
});
// app.get('/api/ratings/avg/product_id=:id', ratings_controller.getAvgRatingByProduct);
it('Should get the average_stars of all related ratings for a given product', async done => {
  for (let i = 1; i <= 100; i++) {
    const res = await st_request.get(`/api/ratings/avg/product_id=${i}`);
    expect(res.status).toBe(200);
    expect(res.body[0].average_stars).toBeGreaterThanOrEqual(0);
    expect(res.body[0].average_stars).toBeLessThanOrEqual(5);
  }
  done();
});