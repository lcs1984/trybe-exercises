-- 1
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 
'Não conheço o filme') AS 'Conheço o Filme?'
FROM sakila.film;

-- 2
SELECT title, rating,
CASE
	WHEN rating = 'G' THEN 'Livre para Todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendados para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
END AS 'Público Alvo'
FROM sakila.film;