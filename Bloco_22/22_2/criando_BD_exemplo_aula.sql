CREATE DATABASE IF NOT EXISTS funcionarios_aula;

USE funcionarios_aula;

CREATE TABLE funcionarios (
 id INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) NOT NULL,
 sobrenome VARCHAR(100) NOT NULL,
 email VARCHAR(50) NOT NULL,
 data_cadastro DATETIME NOT NULL
) ENGINE=InnoDB;

INSERT INTO funcionarios(id, nome, sobrenome, email, data_cadastro)
VALUES('12', 'Joseph', 'Rodrigues', 'jo@gmail.com', '2020-05-05 08:50:25'),
('13', 'André', 'Freeman', 'andre1990@gmail.com', '2020-02-05'),
('14', 'Cíntia', 'Durval', 'cindy@outlook.com', '2020-05-05 10:55:35'),
('15', 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '2020-05-05 11:45:40');


CREATE TABLE telefones (
 id INT PRIMARY KEY AUTO_INCREMENT,
 telefone VARCHAR(20) NOT NULL,
 funcionario_id INT NOT NULL,
 FOREIGN KEY (funcionario_id) REFERENCES funcionarios(id)
) ENGINE=InnoDB;

INSERT INTO telefones(id, telefone, funcionario_id)
VALUES('1','(35)998552-1445', '12'), ('2','(47)99522-4996', '13'), ('3','(33)99855-4669','14'),('4','(33)99200-1556', '15');
 
CREATE TABLE setores (
 id INT PRIMARY KEY AUTO_INCREMENT,
 setor VARCHAR(50) NOT NULL,
 funcionario_id INT NOT NULL,
 FOREIGN KEY (funcionario_id) REFERENCES funcionarios(id)
) ENGINE=InnoDB;

INSERT INTO setores(id, setor, funcionario_id)
VALUES('1', 'Administração', '12'),
('2','Vendas', '12'),
('3','Operacional', '13'),
('4', 'Estratégico', '14'),
('5','Vendas', '15');

-- DROP DATABASE funcionarios_aula;



