SELECT * FROM sakila.actor;

INSERT INTO sakila.actor (first_name, last_name)
values ('Sabrina', 'Gomez');

SELECT * FROM sakila.actor
ORDER BY actor_id DESC LIMIT 1;

-- Se eu tentasse colocar um actor_id inconsistente, retornaria um erro
INSERT INTO sakila.actor(actor_id, first_name, last_name)
VALUES (218, 'Hugo', 'Correa');

INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Robert', 'Canvas'),
('Tim', 'Souza');

SELECT * FROM sakila.actor
ORDER BY actor_id
DESC LIMIT 2;

INSERT IGNORE INTO sakila.actor(first_name, last_name)
VALUES ('Robins', 'Ferris'),
('Tim', 'Souza'),
('Roberto', 'Carlos');

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;

SELECT * FROM sakila.actor ORDER BY actor_id DESC LIMIT 5;
SET SQL_SAFE_UPDATES = 1;

UPDATE cadastro_clientes
SET mensalidade_paga = 1,
valor_mensalidade = 69.99
WHERE nome_cliente = 'Roberto Santos'
and telefone = '21-9992001558';

DELETE FROM sakila.film
WHERE title = 'ALASKA PHANTOM';

SELECT * FROM sakila.film;