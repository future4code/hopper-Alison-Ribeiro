ALTER TABLE tbProjetos DROP titulo;

DESCRIBE tbProjetos;

ALTER TABLE tbProjetos CHANGE date dueDate VARCHAR(50) NOT NULL;

/*Na tabela funcionarios o campo já está definido como unique*/
DESCRIBE tbFuncionarios;