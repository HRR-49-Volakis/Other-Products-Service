const supertest = require('supertest');
const { app } = require('../index.js');

const request = supertest(app);

// app.get('/api/products', products_controller.getAll);
it('Should get the all products', async (done) => {
  const res = await request.get('/api/products');
  expect(res.status).toBe(200);
  expect(res.body.length).toEqual(100);
  done();
});

// app.get('/api/products/id=:id', products_controller.getById);
it('should get each product by its id', async (done) => {
  const res = await request.get('/api/products/id=5');
  expect(res.status).toBe(200);
  expect(res.body.length).toBe(1);
  expect(res.body[0].id).toBe(5);
  done();
});

// app.get('/api/products/similar/id=:id', products_controller.getSimilarDescription);
it('Should get a list of similar products given a product id', async (done) => {
  const res = await request.get('/api/products/similar/id=77');
  expect(res.status).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
  done();
});

// app.get('/api/ratings', ratings_controller.getAll);
it('Should get all of the stored ratings', async (done) => {
  const res = await request.get('/api/ratings');
  expect(res.status).toBe(200);
  expect(res.body.length).toBe(1000);
  done();
});

// app.get('/api/ratings/count/product_id=:id', ratings_controller.getCountByProduct);
it('Should get a total number of ratings for a given product', async (done) => {
  const res = await request.get('/api/ratings/count/product_id=99');
  expect(res.status).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
  done();
});

// app.get('/api/ratings/avg/product_id=:id', ratings_controller.getAvgRatingByProduct);
it('Should get the average_stars of all related ratings for a given product', async (done) => {
  const res = await request.get('/api/ratings/avg/product_id=55');
  expect(res.status).toBe(200);
  expect(res.body[0].average_stars).toBeGreaterThanOrEqual(0);
  expect(res.body[0].average_stars).toBeLessThanOrEqual(5);
  done();
});
