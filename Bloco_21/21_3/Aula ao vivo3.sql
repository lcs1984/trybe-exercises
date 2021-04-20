USE sakila;
DELIMITER $$
	CREATE PROCEDURE gerarDataFormatoBrasileiro2(IN ano INT)
    BEGIN
		SELECT CONCAT(DAY(NOW()),'/',MONTH(NOW()), '/', ano) ;
    END
$$ DELIMITER ;

CALL gerarDataFormatoBrasileiro2(1984);

-- DROP PROCEDURE gerarDataFormatoBrasileiro2;
