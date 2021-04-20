SELECT * FROM sakila.film;

USE sakila;
DELIMITER $$

CREATE PROCEDURE SelecionarPorDuracao(IN duracao NUMERIC)
BEGIN
	SELECT title, description, length FROM sakila.film
    WHERE length > duracao
    ORDER BY length;
END

$$ DELIMITER ;

CALL SelecionarPorDuracao(100);
-- DROP PROCEDURE SelecionarPorDuracao;