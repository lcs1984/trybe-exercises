USE sakila;
DELIMITER $$

CREATE PROCEDURE ObterNomeDosAtores()
BEGIN
	SELECT first_name FROM sakila.actor;
END

$$ DELIMITER ;

CALL ObterNomeDosAtores;
