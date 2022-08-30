CREATE TABLE tbFuncionarios (
	id varchar(4),
    nome varchar(50),
    email varchar(100) not null unique,
    primary key (id)
);

INSERT INTO tbFuncionarios (
	id,
    nome,
    email
) VALUES (
	'001',
    'Luana',
    'lua@lbn.com'
), (
	'002',
    'Vinícius',
    'vini@lbn.com'
), (
	'003',
    'Laura',
    'lau@lbn.com'
);

SELECT * FROM tbFuncionarios;

select id as identifier, nome from tbFuncionarios;

select * from tbFuncionarios where id = 003;

select * from tbFuncionarios where nome like '%a%';

select * from tbFuncionarios where nome not like '%r%' and email like "%u%";

INSERT INTO tbFuncionarios (
	id,
    nome,
    email
) VALUES (
	'004',
    'Yuzo',
    'yuzo@lbn.com'
);

DELETE FROM tbFuncionarios where id = '004';