CREATE FULLTEXT INDEX index_address ON sakila.address(address);
DROP INDEX index_address ON sakila.address;

ALTER TABLE sakila.address ADD FULLTEXT(address);
DROP INDEX address ON sakila.address;

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);
DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.address;
SELECT * FROM sakila.language;


SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('avenue');

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

SHOW INDEX FROM sakila.address;
SHOW INDEX FROM sakila.language;
SHOW COLUMNS FROM sakila.address;
SHOW COLUMNS FROM sakila.language;