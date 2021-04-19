-- SELECT IF (CONDIÇÃO, VERDADEIRO, FALSO);
SELECT * FROM sakila.film;

SELECT title, rental_rate, IF (rental_rate > 0.99, 'Caro', 'Barato')
FROM sakila.film;

SELECT title, rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'barato'
        WHEN rental_rate = 2.99 THEN 'Médio'
        WHEN rental_rate = 4.99 THEN 'Caro'
	ELSE rental_rate = 'Não Classificado'
END AS valor
FROM sakila.film
LIMIT 10;

SELECT first_name, active, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;