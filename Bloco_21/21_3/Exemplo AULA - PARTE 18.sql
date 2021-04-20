
USE sakila;
DELIMITER $$

CREATE FUNCTION ObterNomeDoFilmePorIdDeInventario(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
	DECLARE movie_name VARCHAR(500);
	SELECT distinct f.title
	FROM sakila.inventory AS i
	INNER JOIN sakila.film AS f
	ON f.film_id = i.film_id
	WHERE i.inventory_id = id INTO movie_name;
    RETURN movie_name;
END
$$ DELIMITER ;

SELECT ObterNomeDoFilmePorIdDeInventario(2);


