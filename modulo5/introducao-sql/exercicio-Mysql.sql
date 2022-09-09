CREATE TABLE tbFuncionarios (
	id varchar(4),
    nome varchar(50),
    email varchar(100) not null unique,
    primary key (id)
);