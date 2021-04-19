SELECT * FROM sakila.country;
SELECT * FROM sakila.city;

SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country as country
ON city.country_id = country.country_id;

SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON l.language_id = f.language_id;

-- 1
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT actor.actor_id, actor.first_name, film.film_id
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film
ON actor.actor_id = film.actor_id;

-- ON actor_id
-- 2
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON a.address_id = a.address_id;
-- ON address_id

-- 3
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- ON address_id

-- 4
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE 
	a.district = 'California' 
	AND c.first_name LIKE '%rene%';

-- ON address_id

-- 5
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, COUNT(a.address) AS enderecos_cadastrados
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;


-- 6
SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT S.first_name, S.last_name, AVG(P.amount)
FROM sakila.staff AS S
INNER JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
GROUP BY S.first_name, S.last_name;
-- ON staff_id
-- 7
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT A.actor_id, FM.film_id, F.title
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FM
ON A.actor_id = FM.actor_id
INNER JOIN sakila.film AS F
ON FM.film_id = F.film_id;
