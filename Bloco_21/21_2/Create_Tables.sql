USE livraria;

CREATE TABLE autores (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome_autor VARCHAR(45) NOT NULL
);

CREATE TABLE categorias (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(45) NOT NULL
);

CREATE TABLE livros (
	livro_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(6,2) NOT NULL,
    autor_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES autores (id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Adicionando coluna
ALTER TABLE livros
ADD quantidade_de_paginas INT NULL;

-- Removendo colunas
ALTER TABLE livros
DROP COLUMN quantidade_de_paginas;

-- No caso abaixo, precisamos apagar as cheves estrangeiras para o comando funcionar
ALTER TABLE livros
DROP COLUMN autores_id;

-- Inserindo novamente a coluna autores_id, 
ALTER TABLE livros
ADD autores_id INT NOT NULL,
ADD FOREIGN KEY (autor_id)  REFERENCES autores(id),
ADD FOREIGN KEY (categoria_id) REFERENCES categorias(id);