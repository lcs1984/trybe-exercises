CREATE DATABASE IF NOT EXISTS pizzaria;
USE pizzaria;

CREATE TABLE pizzas (
	pizza_id INT PRIMARY KEY,
    sabor VARCHAR(100),
    preço DECIMAL(5,2),
    INDEX sabor_index(sabor)
) ENGINE=InnoDB;