SET @age = 16;
SELECT IF (@age < 18, 'Menor de Idade', 'Maior de Idade');

SET @is_entrance_allowed = true;
SELECT IF (@is_entrance_allowed = 1, 'Entrada é permitida', 'A Entrada não é permitida');
-- OS VALORES TRUE E FALSE NO CASO DO SQL São no formato dummies, 1 e 0;

SELECT actor_id, IF (actor_id = 101 AND first_name = 'SUSAN',
'É a SUSAN', 'Não É a SUSAN') FROM sakila.actor; 

SELECT title, release_year, length,
CASE
	WHEN length <= 60 THEN 'Duração Curta'
    WHEN length > 60 AND length <= 150 THEN 'Duração Média'
    ELSE 'Duração Longa'
END AS duracao_filme
FROM sakila.film;

SELECT LENGTH('Curso BeTrybe');
SELECT LENGTH(first_name) + LENGTH(last_name)
FROM sakila.actor
WHERE actor_id = 101;

SELECT UCASE('Curso BeTrybe');

SELECT title, release_year, length,
CASE
	WHEN length <= 60 THEN UCASE('Duração Curta')
    WHEN length > 60 AND length <= 150 THEN UCASE('Duração Média')
    ELSE UCASE('Duração Longa')
END AS duracao_filme
FROM sakila.film;

INSERT INTO sakila.actor (first_name, last_name)
VALUES (UCASE('jonh'), UCASE('travolta'));

SELECT * FROM sakila.actor
ORDER BY actor_id DESC
LIMIT 1;

SELECT LCASE('Curso BeTrybe');

UPDATE sakila.actor
SET last_name = LCASE('LENNON')
WHERE actor_id = 201;

SELECT * FROM sakila.actor
ORDER BY actor_id DESC
LIMIT 1;

SELECT REPLACE ('Curso BeTrybe', 'e', 'eeee');
-- Muito bom para fazer com update para adequar um valor errado no banco de dados

SET @ultimo_id = 0;

SET @ultimo_id = SELECT (actor_id
FROM sakila.actor
ORDER BY actor_id DESC LIMIT 1;

SELECT @ultimo_id;

SET @ultimo_id = 201;
INSERT INTO sakila.actor (actor_id, first_name, last_name)
VALUES (REPLACE(@ultimo_id, @ultimo_id, @ultimo_id +1), 'Antonio', 'Bandeiras');

SELECT LEFT('Curso BeTrybe', 5);
SELECT RIGHT('Curso BeTrybe', 5);

SELECT SUBSTRING('Curso BeTrybe', 6);
SELECT SUBSTRING('Curso BeTrybe', 2, 4);
SELECT SUBSTRING('Curso BeTrybe',-6, 2);

SELECT 18 MOD 5;

SELECT ROUND(20.49);
SELECT ROUND(20.49, 3);

SELECT CEIL(20.51);
SELECT CEIL(20.01);

SELECT POW(2,6);
SELECT SQRT(3);
SELECT RAND();
SELECT FLOOR(5+(RAND()*10));

SELECT CURRENT_DATE();
SELECT NOW();

SELECT return_date, rental_date, DATEDIFF(return_date, rental_date)
FROM sakila.rental;

SELECT TIMEDIFF('06:15:30', '05:15:30');

SELECT return_date, rental_date, TIMEDIFF(return_date, rental_date)
FROM sakila.rental;

SELECT DAY(CURRENT_DATE());
SELECT MONTH(CURRENT_DATE());

SELECT HOUR(NOW());
SELECT MINUTE(NOW());
SELECT SECOND(NOW());

SELECT MIN(rental_duration) FROM sakila.film;
SELECT MAX(rental_duration) FROM sakila.film;
SELECT SUM(rental_duration) FROM sakila.film;
SELECT COUNT(rental_duration) FROM sakila.film;