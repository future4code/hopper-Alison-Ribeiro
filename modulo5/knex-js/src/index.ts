import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { gerarId, Funcionario } from "./types";
import { isTypedArray } from "util/types";

const app = express();

app.use(express.json());
app.use(cors());

// Exercicio 1
app.get("/usuarios", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const busca = req.query.busca;

    if (busca) {
      const resultado = await connection.raw(`
        SELECT * FROM tbFuncionarios WHERE nome LIKE "${busca}";
      `);
      res.status(200).send(resultado[0]);
    }

    const resultado = await connection.raw(`
      SELECT * FROM tbFuncionarios
    `);

    res.status(200).send(resultado[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// Exercicio 2
app.post("/cadastro", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {nome, email} = req.body

    if (!nome || !email) {
      errorCode = 422
      throw new Error("Faltam informações");
    }

    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i

    if(regExp.test(email) !== true){
      errorCode = 422
      throw new Error("Deve ser passado um email valido.");
    }
    
    const funcionarioEmail = await connection.raw(`
      SELECT * FROM tbFuncionarios WHERE email = "${email}"
    `)

    if (funcionarioEmail[0].length === 0) {
      throw new Error("Email já existe");      
    }

    if (typeof nome !== 'string' && typeof email !== 'string') {
      throw new Error("Dados errados");      
    }

    const novoFuncionario: Funcionario = {
      id: gerarId(4),
      nome,
      email
    }

    await connection.raw(`
      INSERT INTO tbFuncionarios(id, nome, email)
      VALUES("${novoFuncionario.id}", "${novoFuncionario.nome}", "${novoFuncionario.email}")
    `)

    res.status(200).send("Cadastro realizado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
});

// Exercicio 3
app.put("/funcionario/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const email = req.body.email

    const funcionarioId = await connection.raw(`
      SELECT * FROM tbFuncionarios WHERE id = "${id}";
    `)

    if (funcionarioId[0].length === 0) {
      errorCode = 422
      throw new Error("Funcionario não encontrado");      
    }
    
    const funcionarioEmail = await connection.raw(`
      SELECT * FROM tbFuncionarios WHERE email = "${email}"
    `)

    if (funcionarioEmail[0].length === 0) {
      throw new Error("Email já existe");      
    }
    
    if (typeof email !== 'string') {
      throw new Error("Dados errados");      
    }
  
    if (!email) {
      throw new Error("Insira o email");      
    }

    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i

    if(regExp.test(email) !== true){
      errorCode = 422
      throw new Error("Deve ser passado um email valido.");
    }


    await connection.raw(`
      UPDATE tbFuncionarios
      SET email = "${email}"
      WHERE id = "${id}"
    `)
    res.status(200).send("Email alterado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// Exercicio 4
app.delete("/funcionario/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    const funcionario = await connection.raw(`
      SELECT * FROM tbFuncionarios
      WHERE id = "${id}";      
    `)

    if (funcionario[0].length === 0) {
      throw new Error("Funcionario não encontrado");      
    }

    await connection.raw(`
      DELETE FROM tbFuncionarios
      WHERE id = "${id}";
    `)

    res.status(200).send("Cadastro deletado com sucesso")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
