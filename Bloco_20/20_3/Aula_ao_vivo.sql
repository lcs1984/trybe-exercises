SELECT * FROM sakila.film
WHERE rental_duration = 6;

SELECT * FROM sakila.actor
WHERE first_name BETWEEN 'BELA' AND 'DUSTIN'
ORDER BY first_name;

SELECT * FROM sakila.rental
WHERE return_date BETWEEN '2005-05-07' AND '2005-06-03';

SELECT now();
SELECT curdate();
SELECT curtime();

-- INTERVALO DE HORAS QUE PODE SER USADO
-- 00:00:00 - 23:59:59
SELECT year(now());
SELECT month(now());
SELECT day(now());

SELECT * FROM sakila.rental
WHERE date(rental_date) = '2005-05-26';

SELECT * FROM sakila.rental
WHERE rental_date BETWEEN
CAST('2005-05-26 00:00:00' AS datetime)
AND CAST('2005-05-27 23:59:59' AS datetime);

SELECT * FROM sakila.customer
WHERE first_name LIKE '%FER%'; 

SELECT * FROM sakila.actor
WHERE first_name LIKE '_RA%';
