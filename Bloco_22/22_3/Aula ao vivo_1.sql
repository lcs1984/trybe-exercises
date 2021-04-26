USE sakila;
CREATE VIEW FilmesDentroDasCategorias AS
	SELECT title FROM film AS f
	INNER JOIN film_category AS fc
	ON f.film_id = fc.film_id
	WHERE category_id IN (1, 3, 5);

SELECT * FROM sakila.film_category;