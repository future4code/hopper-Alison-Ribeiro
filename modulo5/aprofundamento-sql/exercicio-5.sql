SELECT id, dueDate as Prazo_Entrega, name, description FROM tbProjetos ORDER BY dueDate DESC;

SELECT name, dueDate as Prazo_Vencimento FROM tbProjetos ORDER BY dueDate ASC LIMIT 2;