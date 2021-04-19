SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER');

SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);

SELECT * FROM sakila.rental
WHERE rental_id IN (269, 239, 126, 399, 142);

SELECT * FROM sakila.address
WHERE district IN ('Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT * FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

SELECT * FROM sakila.rental
WHERE customer_id
BETWEEN 1 AND 10;

-- 1
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

-- 2
SELECT email FROM sakila.customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email;

-- 3
SELECT COUNT(*) AS quantidade_de_pagamentos FROM sakila.payment
WHERE payment_date
BETWEEN '2005-05-01' AND '2005-08-01';

-- 4
SELECT title, release_year, length FROM sakila.film
WHERE rental_duration
BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

-- 5
SELECT * FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;