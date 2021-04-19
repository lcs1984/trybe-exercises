SET SQL_SAFE_UPDATES = 0;
SELECT * FROM sakila.staff;

UPDATE sakila.staff
SET first_name = 'Geraldos'
WHERE first_name = 'Geraldo';

UPDATE sakila.staff
SET first_name = 'Gilliards', last_name = 'Program'
WHERE staff_id = 5;

SELECT * FROM sakila.actor;

UPDATE sakila.actor
SET first_name = 'CAROLINE'
WHERE actor_id IN (3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE'
              WHEN 2 THEN 'DAVIS'
              WHEN 3 THEN 'CAROLINE'
END);

SELECT * FROM sakila.staff;

UPDATE sakila.staff
SET active = '0'
WHERE first_name = 'Geralt';

UPDATE sakila.staff 
set password = 'fazendoUpdate'
WHERE active = 0
ORDER BY last_update
LIMIT 2;