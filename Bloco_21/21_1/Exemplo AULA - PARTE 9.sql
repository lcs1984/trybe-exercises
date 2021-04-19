-- O GROUP BY remove as duplicações
SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT rating, AVG(replacement_cost)
FROM sakila.film
GROUP by rating;

-- 1
SELECT active, COUNT(*) 
FROM sakila.customer
GROUP BY active;
-- 2
SELECT active, store_id, COUNT(*) 
FROM sakila.customer
GROUP BY active, store_id;

-- 3
SELECT rating, AVG(rental_duration) AS avg_rental_duration
FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;
-- 4
SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
HAVING COUNT(*) > 5
ORDER BY COUNT(*) DESC;

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

SELECT rating, AVG(length) AS avarage_lenght
FROM sakila.film
GROUP BY rating
HAVING avarage_lenght BETWEEN 115.0 AND 121.5
ORDER BY avarage_lenght DESC;

SELECT rating, SUM(replacement_cost)  AS total_replacement_cost
FROM sakila.film
GROUP by rating
HAVING total_replacement_cost > 3950.50
ORDER BY total_replacement_cost ASC;