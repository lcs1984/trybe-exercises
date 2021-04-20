-- SELECT * FROM sakila.film;
-- SELECT * FROM sakila.film_category;
SELECT * FROM sakila.category;

-- SELECT f.film_id, f.title, fc.category_id, c.name
-- FROM sakila.film AS f
-- INNER JOIN sakila.film_category AS fc
-- ON f.film_id = fc.film_id
-- INNER JOIN sakila.category AS c
-- ON fc.category_id = c.category_id
-- WHERE c.name = 'Animation'
-- ORDER BY f.title;

-- 2

DELIMITER $$

CREATE PROCEDURE MostrarFilmesPorCategoria(IN categoria VARCHAR(100))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.name
	FROM sakila.film AS f
	INNER JOIN sakila.film_category AS fc
	ON f.film_id = fc.film_id
	INNER JOIN sakila.category AS c
	ON fc.category_id = c.category_id
	WHERE c.name = categoria
	ORDER BY f.title ;
END

$$ DELIMITER ;

-- DROP PROCEDURE MostrarFilmesPorCategoria; 

CALL MostrarFilmesPorCategoria('Action');
CALL MostrarFilmesPorCategoria('Drama');