SELECT * FROM sakila.actor;

CREATE INDEX index_first_name ON sakila.actor(first_name);

-- DROP INDEX index_first_name ON sakila.actor;

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

CREATE FULLTEXT INDEX index_address ON sakila.address(address);

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

SELECT first_name, total_amount_spent 
FROM sakila.top_10_customers
WHERE total_amount_spent > 170;

SHOW COLUMNS FROM sakila.top_10_customers;