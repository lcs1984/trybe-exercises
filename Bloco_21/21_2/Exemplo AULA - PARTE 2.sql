SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;

-- As duas tabelas possuem first_name e last_name e eu quero trazer as pessoas com
-- sobrenomes iguais

SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name;

SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer c
RIGHT JOIN sakila.actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
INNER JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;