ALTER TABLE tbProjetos ADD description VARCHAR(150);

DESCRIBE tbProjetos;

UPDATE tbProjetos SET description="Projeto de sistema em nuvem da Labenu." WHERE id = "001";
UPDATE tbProjetos SET description="Projeto de sistema de gerenciamento de músicas da Labenu." WHERE id = "002";
UPDATE tbProjetos SET description="Projeto de rede de comunicação da Labenu." WHERE id = "003";
SELECT * FROM tbProjetos;