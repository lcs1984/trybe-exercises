SELECT * FROM sakila.customer;

SELECT email, active 
FROM sakila.customer
WHERE email = 'MARY.SMITH@sakilacustomer.org';

USE sakila;
DELIMITER $$
CREATE PROCEDURE VerificaSeEstaCadastrado(IN e_mail VARCHAR(200), OUT isActive BOOL)
BEGIN
	SET isActive = (SELECT active AS dummy_active
		FROM sakila.customer
		WHERE email = e_mail);
END
$$ DELIMITER ;

-- DROP PROCEDURE VerificaSeEstaCadastrado;
SELECT @ActiveStatus;
CALL VerificaSeEstaCadastrado('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;