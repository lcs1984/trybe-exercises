SELECT * FROM sakila.staff;
SELECT * FROM sakila.actor;

INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Marcelo', 'Santos');

DELETE FROM sakila.actor
WHERE first_name = 'Marcelo' AND last_name = 'Santos';

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff;