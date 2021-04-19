SELECT f.title, f.rating
FROM (SELECT * FROM sakila.film WHERE rating = 'R') AS f;

-- Aqui estou procurando endereco, distrito e cidade com city_id iguais em duas
-- tabelas
SELECT address, district,
(SELECT city FROM sakila.city WHERE city.city_id = sakila.address.city_id)
AS city
FROM sakila.address;

-- Aqui estou pesquisando o city_id em outra tabela atraves de um parametro de nome
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);

SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;