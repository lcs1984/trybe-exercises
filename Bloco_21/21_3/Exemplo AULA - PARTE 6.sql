USE sakila;
DELIMITER $$ 

CREATE PROCEDURE RetornarAMediaDeUmGrupoINOUT(INOUT selectedGroup VARCHAR(200))
BEGIN
	SELECT AVG(length)
    FROM sakila.film
    WHERE rating = selectedGroup INTO selectedGroup;
END

$$ DELIMITER ;

-- DROP PROCEDURE RetornarAMediaDeUmGrupoINOUT;
SET @group = 'G';
CALL RetornarAMediaDeUmGrupoINOUT(@group);
SELECT @group;

