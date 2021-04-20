-- Agora eu quero escolher um grupo e retornar a média dele
 
SELECT rating, CONCAT('LEO')
FROM sakila.film
WHERE rating = 'PG';

USE sakila;

DELIMITER $$
CREATE PROCEDURE RetornarAMediaDeUmGrupo(IN selectedGroup VARCHAR(50), OUT mediaDoGrupo DOUBLE)
BEGIN
	SELECT AVG(length)
    FROM sakila.film
    WHERE rating = selectedGroup INTO mediaDoGrupo;
END

$$ DELIMITER ;

-- DROP PROCEDURE RetornarAMediaDeUmGrupo;

CALL RetornarAMediaDeUmGrupo('G', @media);
SELECT @media;
