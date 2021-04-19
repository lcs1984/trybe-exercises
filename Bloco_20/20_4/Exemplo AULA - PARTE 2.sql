INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');

SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff;

-- 1
INSERT INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');

-- 2
INSERT INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Geraldo', 'de Rios', 3, 'geraldo@gmail.com', 1, 1, 'geraldo', 'geraldao'),
('Giliard', 'Programmer', 2, 'gilli@gmail.com', 1, 1, 'gilli', 'goodprogrammer');
-- 3
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
LIMIT 5; 
-- 4
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
VALUES('Novel'), 
('Biography'), 
('Thriller');
-- 5
SELECT * FROM sakila.store;
INSERT INTO sakila.store(address_id, store_id, manager_staff_id)
VALUES ('3','3', '3');
