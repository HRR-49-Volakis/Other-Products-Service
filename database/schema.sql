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

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  username varchar(50)
);

CREATE TABLE ratings (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int,
  rated_product int,
  stars_given int
);


ALTER TABLE ratings ADD FOREIGN KEY (rated_product) REFERENCES products(id);
ALTER TABLE ratings ADD FOREIGN KEY (user_id) REFERENCES users(id);

--create a FULLTEXT index to match product descriptsion
--https://database.guide/how-the-match-function-works-in-mysql/#:~:text=In%20MySQL%2C%20the%20MATCH(),table%20columns%20to%20be%20searched.
ALTER TABLE products ADD FULLTEXT(brief_description);




