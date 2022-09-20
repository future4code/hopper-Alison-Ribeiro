### Exercício de Relações SQL

### Comandos utilizados para a criação de tabelas e população das mesmas:
CREATE TABLE tbFilme (
	id varchar(20) PRIMARY KEY,
    nome varchar(45) not null
);

INSERT INTO tbFilme (id, nome) 
VALUES (
	"001",
    "E o vento levou"
),
(
	"002",
    "O som do Coração"
),
(
	"003",
    "Shrek"
),
(
	"004",
    "antes que o dia termine"
);

CREATE TABLE tbAtores (
	id varchar(20) PRIMARY KEY,
    nome varchar(45)
);

INSERT INTO tbAtores (id, nome) 
VALUES (
	"001",
    "Keanu"
),
(
	"002",
    "Michelle"
),
(
	"003",
    "Jonh"
),
(
	"004",
    "Angelina"
),
(
	"005",
    "Rachael"
),
(
	"006",
    "Adam"
);

CREATE TABLE tbAvalia (
	id VARCHAR(20) PRIMARY KEY,
    comment TEXT NOT NULL,
	avaliar FLOAT NOT NULL,
    filme_id VARCHAR(255),
    FOREIGN KEY (filme_id) REFERENCES tbFilme(id)
);

INSERT INTO tbAvalia (id, comment, avaliar, filme_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"001"
),(
	"002",
    "Excelente!",
    10,
	"002"
);

CREATE TABLE tbElencoFilme (
	filme_id VARCHAR(20),
	atores_id VARCHAR(20),
    FOREIGN KEY (filme_id) REFERENCES tbFilme(id),
    FOREIGN KEY (atores_id) REFERENCES tbAtores(id)
);

INSERT INTO tbElencoFilme(filme_id, atores_id)
VALUES(
	"004",
    "003"
),
(
	"002",
    "003"
),
(
	"004",
    "004"
),
(
	"004",
    "005"
),
(
	"004",
    "005"
),
(
	"003",
    "001"
);

SELECT tbFilme.id as ID_Filme, tbFilme.nome as NOME_Filme, tbAvalia.avaliar as NOTA FROM tbFilme 
INNER JOIN tbAvalia ON tbFilme.id = tbAvalia.filme_id;

## Exercício 1
a) Chave estrangeira é o campo que se cria uma relação com outra tabela.

b)
CREATE TABLE tbAvalia (
	id VARCHAR(20) PRIMARY KEY,
    comment TEXT NOT NULL,
	avaliar FLOAT NOT NULL,
    filme_id VARCHAR(255),
    FOREIGN KEY (filme_id) REFERENCES tbFilme(id)
);

INSERT INTO tbAvalia (id, comment, avaliar, filme_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"001"
),(
	"002",
    "Excelente!",
    10,
	"002"
);

c) não existe a possibilidade de adicionar ou atualizar algum dado na tabela rating sem que o id seja correspondente a um id valido da tabela qual a chave estrangeira foi vinculada

d) A tabela já foi criada sem este campo.
Porém o comando seria:
ALTER TABLE tbFilme DROP COLUMN avaliacao;

e) Não se pode deletar um campo da tabela que esteja relacionado com outra tabela.

## Exercício 2
a) A tabela faz relação com os campos id de cada tabela, tbfilme e tbAtores.

b)INSERT INTO tbElencoFilme(filme_id, atores_id)
VALUES(
	"004",
    "003"
),
(
	"002",
    "003"
),
(
	"004",
    "004"
),
(
	"004",
    "005"
),
(
	"004",
    "005"
),
(
	"003",
    "001"
);

c) Não há a possibilidade de criar relação com algo inexistente.

d) Não se pode deletar um campo da tabela que esteja relacionado com outra tabela.

## Exercício 3
a)Buscou todas as informações que possuem relações entre as tabelas.

b)
SELECT tbFilme.id as ID_Filme, tbFilme.nome as NOME_Filme, tbAvalia.avaliar as NOTA FROM tbFilme 
INNER JOIN tbAvalia ON tbFilme.id = tbAvalia.filme_id;

