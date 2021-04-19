-- 1. 
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2
SELECT * FROM sakila.customer
WHERE first_name <> 'KENNETH'
AND (active = 0 AND store_id = 2)
ORDER BY first_name;

-- 3
SELECT title, description, release_year, replacement_cost, rating FROM sakila.film
WHERE (rating <> 'NC-17' AND replacement_cost > 18)
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- 4
SELECT * FROM sakila.customer;
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM sakila.customer
WHERE active <> 0 AND store_id = 1;

-- 5
SELECT * FROM sakila.customer
WHERE active = 0 AND store_id = 1;

-- 6
SELECT * FROM sakila.film
WHERE (rating = 'NC-17' OR rating = 'R') 
ORDER BY rental_rate ASC, title
LIMIT 50;