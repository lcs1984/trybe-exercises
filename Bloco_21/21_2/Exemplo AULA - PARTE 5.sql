-- Juntar duas tabelas com as mesmas colunas sem valores repetidos
SELECT first_name, last_name FROM sakila.actor
UNION
SELECT first_name, last_name FROM sakila.customer;

-- Juntar duas tabelas com as mesmas colunas com valores repetidos
SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.customer;

-- Juntar duas tabelas com mesmas colunas, sendo algumas diferentes e ordenando
(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer)
ORDER BY first_name;

-- Quero só alguns valores, só os 10 primeiros
(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor LIMIT 10)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 10)
ORDER BY first_name
LIMIT 10;

-- Selecionando do 21 ao 30
(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor LIMIT 20)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 120)
ORDER BY first_name
LIMIT 10 OFFSET 20;

-- 1
SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

-- 2
SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;

SELECT first_name FROM sakila.customer
WHERE first_name LIKE '%tracy%'
UNION 
SELECT first_name FROM sakila.actor
WHERE first_name LIKE '%je%';
-- 3
(SELECT first_name FROM sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1) 
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name ASC;
-- 4
(SELECT first_name, last_name FROM sakila.customer LIMIT 60)
UNION
(SELECT first_name, last_name FROM sakila.actor LIMIT 60)
ORDER BY first_name
LIMIT 15 OFFSET 45;