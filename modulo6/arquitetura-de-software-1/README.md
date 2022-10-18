# To Do List

## ESTRUTURA DE DADOS  

* ## Usuários
  * id
  * name
  * email
  * password

* ## Tarefas 
  * id
  * title
  * description
  * deadline
  * status: `"to_do" || "doing" || "done"`
  * author 
  * assignees

---

## CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE User_Arq(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);
```
---

## ENDPOINTS 

* ## Criar usuário
  * Método: PUT
  * Path: `/user`
  * Body:
    * name (obrigatório)
    * email (obrigatório)
    * password (obrigatório)

* ## Pegar todos os usuários
  * Método: GET
  * Path: `/user`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * name


* ## Deletar Usuário
  * Método: DEL
  * Path: `/user`