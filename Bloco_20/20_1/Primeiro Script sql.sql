SELECT * FROM sakila.film ORDER BY release_year;
SELECT count(*) FROM sakila.address;
SELECT count(address2) FROM sakila.address;
SELECT count(city_id) as Cidade, COUNT(district) as Ditrito FROM sakila.address;
SELECT count(address) as Endrereco FROM sakila.address;
SELECT count(end.address) as Endrereco FROM sakila.address end;

SELECT district, count(*) AS quantidade FROM sakila.address WHERE district='California';
SELECT * FROM sakila.actor ORDER BY first_name DESC;
SELECT * FROM sakila.actor ORDER BY first_name ASC;