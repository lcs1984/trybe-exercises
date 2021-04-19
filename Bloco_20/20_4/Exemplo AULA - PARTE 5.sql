SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.film_text;

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor
WHERE first_name = 'GRACE';

-- 1
SELECT actor_id from sakila.actor
WHERE first_name = 'KARL';

SELECT * FROM sakila.film_actor;

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- 2
SELECT * FROM sakila.actor
WHERE first_name = 'MATTHEW';

SELECT * FROM sakila.film_actor
WHERE actor_id IN (8,103,181);

DELETE FROM sakila.film_actor
WHERE actor_id IN (8,103,181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- 3
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

-- 4

-- 5

-- 6
