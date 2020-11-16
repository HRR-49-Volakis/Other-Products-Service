const faker = require('faker');

const name = faker.commerce.product();
const description = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}, ${faker.random.number(50)} cm`;

console.log(description);