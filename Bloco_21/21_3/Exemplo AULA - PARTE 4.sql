-- Quero retornar a média de duração dos filmes e colocar como parametro de saída

-- 1º: Lembrar como fazer manualmente;

-- SELECT rating, AVG(length) 
-- FROM sakila.film
-- GROUP BY rating;
-- SELECT * FROM sakila.film;

-- SELECT AVG(length) 
-- FROM sakila.film;

USE sakila;
DELIMITER $$

CREATE PROCEDURE ObterMediaDosFilmes(OUT mediaGeral DOUBLE)
BEGIN
	SELECT AVG(length) FROM sakila.film INTO mediaGeral;
END

$$ DELIMITER ;

CALL ObterMediaDosFilmes(@media);
SELECT @media;

SELECT * FROM sakila.film
WHERE length < @media OR length = @media
ORDER BY length DESC;