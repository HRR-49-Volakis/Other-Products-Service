DROP DATABASE IF EXISTS ikea;
CREATE DATABASE ikea;

USE ikea;

CREATE TABLE products (
  id int PRIMARY KEY AUTO_INCREMENT,
  product_name varchar(255),
  image_one_url text,
  image_two_url text,
  page_url text,
  price double,
  hearted boolean,
  brief_description text,
  collection_name varchar(255)
);

CREATE TABLE ratings (
  id int PRIMARY KEY AUTO_INCREMENT,
  rated_product int,
  stars_given int
);


ALTER TABLE ratings ADD FOREIGN KEY (rated_product) REFERENCES products(id);
ALTER TABLE products ADD FULLTEXT(brief_description);




