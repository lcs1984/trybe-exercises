-- SELECT customer_id, COUNT(*) AS total_de_pagamentos
-- FROM sakila.payment
-- GROUP BY customer_id
-- HAVING customer_id = 1 ;

USE sakila
DELIMITER $$

CREATE FUNCTION RetornarTotalDePagamentos(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_De_Pagamentos INT;
	SELECT COUNT(*)
	FROM sakila.payment
	GROUP BY customer_id
	HAVING customer_id = id INTO total_De_Pagamentos;
    RETURN total_De_Pagamentos;
END
$$ DELIMITER ;

-- DROP FUNCTION RetornarTotalDePagamentos;

SELECT RetornarTotalDePagamentos(1);
SELECT RetornarTotalDePagamentos(2);
