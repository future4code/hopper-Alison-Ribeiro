import { AddressInfo } from "net";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { gerarId, Usuario } from "./types";

const app: Express = express();

app.use(express.json());
app.use(cors());

// 01) Criar usuário
app.post("/user", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { nome, nickname, email } = req.body;

    // Condição para confirmar se todos os campos forram preenchidos corretamente
    if (!nome || !nickname || !email) {
      errorCode = 422;
      throw new Error("Faltam dados para preencher");
    }
    if (typeof nome !== "string" && typeof email !== "string") {
      throw new Error("Dados errados");
    }

    // Declaração e condição para confirmar se o email foi preenchido corretamente
    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

    if (regExp.test(email) !== true) {
      errorCode = 422;
      throw new Error("Deve ser passado um email valido.");
    }

    // Declaração e condição para saber se o nickname é único, se não existe outro igual
    const nickUsuario = await connection.raw(`
        SELECT * FROM tbUsuario WHERE nickname = "${nickname}"
      `);

    if (nickUsuario[0].length !== 0) {
      errorCode = 422;
      throw new Error("Nickname já existe");
    }

    // Declaração e condição para saber se o email já existe no banco de dados
    const emailUsuario = await connection.raw(`
        SELECT * FROM tbUsuario WHERE email = "${email}"
      `);

    if (emailUsuario[0].length !== 0) {
      errorCode = 422;
      throw new Error("Email já existe");
    }

    const novoUsuario: Usuario = {
      id: gerarId(20),
      nome,
      nickname,
      email,
    };

    await connection.raw(`
    INSERT INTO tbUsuario(id, nome, nickname, email)
    VALUES("${novoUsuario.id}", "${novoUsuario.nome}", "${novoUsuario.nickname}", "${novoUsuario.email}")
    `);

    res.status(200).send("Cadastro realizado");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// 02) Pegar Usuário pelo ID
app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;
    const nickname = req.body.nickname;

    const idUsuario = await connection.raw(`
          SELECT * FROM tbUsuario WHERE id = "${id}"
        `);

    if (idUsuario[0] !== 0) {
      errorCode = 422;
      throw new Error("Usuário não encontrado");
    }

    const nickUsuario = await connection.raw(`
          SELECT * FROM tbUsuario WHERE nickname = "${nickname}"
        `);

    if (nickUsuario[0] !== 0) {
      errorCode = 422;
      throw new Error("Usuário não encontrado");
    }

    if (!nickUsuario) {
      errorCode = 422;
      throw new Error("Insira o Nickname do usuário");
    }

    const resultado = await connection.raw(`
          SELECT * FROM tbUsuario WHERE nickname = "${nickname}"
        `);

    res.status(200).send(resultado[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// 03) Editar usuário
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;
    const nome = req.body.nome;
    const nickname = req.body.nickname;

    const idUsuario = await connection.raw(`
      SELECT * FROM tbUsuario WHERE id = "${id}"
    `);

    if (idUsuario[0] !== 0) {
      errorCode = 422;
      throw new Error("Usuário não encontrado");
    }

    

  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
