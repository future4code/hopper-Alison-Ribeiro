import { AddressInfo } from "net";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { gerarId, USUARIO, EDITAUSUARIO, CADTAREFA } from "./types";

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

    const novoUsuario: USUARIO = {
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

    if (idUsuario[0].length !== 0) {
      errorCode = 422;
      throw new Error("Usuário não encontrado");
    }

    const nickUsuario = await connection.raw(`
          SELECT * FROM tbUsuario WHERE nickname = "${nickname}"
        `);

    if (nickUsuario[0].length !== 0) {
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
    const { nome, nickname } = req.body.nome;

    const idUsuario = await connection.raw(`
      SELECT * FROM tbUsuario WHERE id = "${id}"
    `);

    if (idUsuario[0].length !== 0) {
      errorCode = 422;
      throw new Error("Usuário não encontrado");
    }

    if (!nome || !nickname) {
      errorCode = 422;
      throw new Error("Faltam dados para alteração");
    }

    await connection.raw(`
      UPDATE tbUsuario SET nome = "${nome}", nickname = "${nickname}" WHERE id = "${id}"
    `);

    res.status(200).send("Alteração Realizada");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/task", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { titulo, descricao, data_limite, usuario_criador_id } = req.body;

    if (!titulo || !descricao || !data_limite || !usuario_criador_id) {
      errorCode = 422;
      throw new Error("Faltam Informações");
    }

    const novaTarefa: CADTAREFA = {
      id: gerarId(20),
      titulo,
      descricao,
      data_limite: data_limite.split("/").reverse().join("/"),
      usuario_criador_id,
    };

    await connection.raw(`
      INSERT INTO tbTarefas(id, titulo, descricao, data_limite, usuario_criador_id)
      VALUES("${novaTarefa.id}", "${novaTarefa.titulo}", "${novaTarefa.descricao}", "${novaTarefa.data_limite}", "${novaTarefa.usuario_criador_id}")
    `);

    res.status(200).send("Cadastro realizado");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;

    const idTarefa = await connection.raw(`
      SELECT * FROM tbTarefas where id = "${id}"
    `);

    if (idTarefa[0].length !== 0) {
      errorCode = 422;
      throw new Error("Tarefa não encontrada");
    }

    const resultado = await connection.raw(`
      SELECT tbTarefas.id as IdTarefa, tbTarefas.titulo as Tarefa, tbTarefas.descricao as Descricao, tbTarefas.data_limite as DATA_Limite, tbTarefas.status as Status, tbTarefas.usuario_criador_id as ID_Usuario, tbUsuario.nickname as Nickname FROM tbTarefas INNER JOIN tbUsuario WHERE tbTarefas.id = "${id}"
    `)

    res.status(200).send(resultado[0]);

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
