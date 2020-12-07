
CREATE TABLE ratings (
  id serial PRIMARY KEY,
  rated_product int NOT NULL,
  stars_given int NOT NULL
)









-- psql -U postgres -d mydb -a -f sdc_postgres/schema.sql -- Absolute path to .sql file
