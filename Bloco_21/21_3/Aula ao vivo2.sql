USE sakila;
DELIMITER $$
	CREATE PROCEDURE gerarDataFormatoBrasileiro()
    BEGIN
		SELECT CONCAT(DAY(NOW()),'/',MONTH(NOW()), '/', YEAR(NOW())) ;
    END
$$ DELIMITER ;

CALL gerarDataFormatoBrasileiro();

-- DROP PROCEDURE gerarDataFormatoBrasileiro;


