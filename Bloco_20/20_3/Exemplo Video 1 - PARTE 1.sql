SELECT * FROM sakila.actor
-- WHERE last_name = "DAVIS"
WHERE actor_id = 101;

SELECT * FROM sakila.film
WHERE length > 50
ORDER BY length;

SELECT * FROM sakila.film
WHERE title <> "ALIEN CENTER"
AND replacement_cost > 20
ORDER BY replacement_cost;

SELECT * FROM sakila.film
WHERE rating = 'G' 
OR rating = 'PG'
OR rating = 'PG13'
ORDER BY rating;

SELECT * FROM sakila.rental
WHERE return_date IS NULL;

SELECT * FROM sakila.staff
WHERE active IS TRUE;
-- Quando eu coloco TRUE ele traz somente os valores ativos, que são verdadeiros;
-- Quando eu coloco IS FALSE, irá trazer os valores iguais a zero;
-- Quando eu cololo IS NULL, irá tazer os valores nulos;
-- ATENÇÃO: EXISTE UMA GRANDE DIFERENÇA ENTRE VALORES EM BRANCO E NULOS;

SELECT * FROM sakila.staff
WHERE active IS FALSE;

SELECT * FROM sakila.staff
WHERE active IS NOT TRUE;

SELECT * FROM sakila.address
WHERE address2 IS TRUE;

SELECT * FROM sakila.film
WHERE title NOT LIKE 'academy%';
-- O % signica que não começam com a palavra academy