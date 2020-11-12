DROP DATABASE IF EXISTS ikea;
CREATE DATABASE ikea;

USE ikea;

CREATE TABLE products (
  id int PRIMARY KEY AUTO_INCREMENT,
  product_name varchar(255),
  image_one_url text,
  image_two_url text,
  page_url text,
  price int,
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



-- CREATE TABLE favorites (
--   id int PRIMARY KEY AUTO_INCREMENT,
--   user_id int,
--   product_id int
-- );

-- ALTER TABLE favorites ADD FOREIGN KEY (user_id) REFERENCES users(id);
-- ALTER TABLE favorites ADD FOREIGN KEY (product_id) REFERENCES products(id);
-- ALTER TABLE users ADD FOREIGN KEY (favorites_id) REFERENCES favorites(id);
ALTER TABLE ratings ADD FOREIGN KEY (rated_product) REFERENCES products(id);
ALTER TABLE ratings ADD FOREIGN KEY (user_id) REFERENCES users(id);


-- /*
--  * Schema design https://dbdiagram.io/d/5fab21e43a78976d7b7b5d68
-- */


-- INSERT INTO products (
--   image_one_url,
--   image_two_url,
--   page_url,
--   product_name,
--   price,
--   avg_rating,
--   num_ratings,
--   hearted,
--   brief_description,
--   collection_name)
--   VALUES (
--     "wwwwww1",
--     "wwwwww2",
--     "wwwwww3",
--     "DJUNGELSKOG",
--     "35",
--     "5",
--     "61",
--     false,
--     "Soft toy, brown bear",
--     "DJUNGELSKOG"
--   );



