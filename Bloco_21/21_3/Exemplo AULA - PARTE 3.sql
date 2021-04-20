SET @filme = '%run%';

SELECT * FROM sakila.film
WHERE title LIKE @filme;

-- Quando eu quiser retornar um valor eu tenho que atribuí-la a uma variável. 
-- Faço isso com o SET @nomeDaVariável = valor_da_variável
