SELECT * FROM sakila.actor
WHERE first_name = 'LEONARDO';

INSERT INTO sakila.actor (first_name, last_name)
VALUES ('LEONARDO', 'SARDINHA');

UPDATE sakila.staff
SET last_name = 'CASTRO'
WHERE last_name = 'SARDINHA';

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.`language`;

DELETE FROM sakila.`language`
WHERE language_id = 5;

DELETE FROM sakila.`city`
WHERE city_id = 3;

SELECT * FROM sakila.city
ORDER BY city_id;

