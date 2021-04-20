-- SELECT * FROM sakila.film_actor;

-- SELECT COUNT(*) AS total_film, fa.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS Full_Name
-- FROM sakila.film_actor AS fa
-- INNER JOIN sakila.actor AS a
-- ON fa.actor_id = a.actor_id
-- GROUP BY actor_id
-- ORDER BY total_film DESC
-- LIMIT 10;

-- 1

USE sakila;
DELIMITER $$
CREATE PROCEDURE MostrarOsDezAtoresMaisPopulares()
BEGIN
	SELECT COUNT(*) AS total_film, fa.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS Full_Name
	FROM sakila.film_actor AS fa
	INNER JOIN sakila.actor AS a
	ON fa.actor_id = a.actor_id
	GROUP BY actor_id
	ORDER BY total_film DESC
	LIMIT 10;
END

$$ DELIMITER ;

CALL MostrarOsDezAtoresMaisPopulares();