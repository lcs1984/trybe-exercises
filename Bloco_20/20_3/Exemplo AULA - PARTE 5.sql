-- Maneiras de encontrar dados por data
-- Vamos dizer que queremos encontrar pagamentos realizados na data 2005-07-31 na tabela sakila.payment . Há várias formas de fazer isso.
-- Usando a função DATE(coluna_do_tipo_date) :

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

-- Usando LIKE para valores aproximados:
-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

-- Encontra um pagamento com dia e hora exatos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';

-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo

-- 1
SELECT COUNT(*) AS Pagamentos FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date LIKE '2005-05-25%';

-- 2
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date)
BETWEEN '2005-07-01' AND '2005-08-22';

-- 3
SELECT DATE(rental_date), YEAR(rental_date), DAY(rental_date), HOUR(rental_date),
MINUTE(rental_date), SECOND(rental_date)
FROM sakila.rental
WHERE rental_id = 10330;

-- 4
SELECT * FROM sakila.payment
WHERE payment_date 
BETWEEN '2005-07-28 22:00:00' AND '2005-07-28 23:59:59';

SELECT * FROM sakila.payment
WHERE payment_date 
BETWEEN 
CAST('2005-07-28 22:00:00' AS DATETIME)
AND CAST('2005-07-28 23:59:59' AS DATETIME);