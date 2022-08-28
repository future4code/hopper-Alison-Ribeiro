import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {
  clienteLabeBank,
  MOVIMENTACAO,
  InfoConta,
  Cliente,
  gerarId,
} from "./dados";
import { messageStatus } from "./messages";
import { calculaIdade } from "./idade";

const app: Express = express();
app.use(express.json());
app.use(cors());

// End point para cadastrar novo usuário
app.post("/cadastro-usuario", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const dadosUsuario: Cliente = req.body;

    // Verifica se usuário inseriu todos os dados
    if (!dadosUsuario.nome || !dadosUsuario.cpf || !dadosUsuario.dataNasc) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    // Verifica maior idade
    if (dadosUsuario.dataNasc) {
      const idade = calculaIdade(dadosUsuario.dataNasc);
      if (idade < 18) {
        throw new Error(messageStatus.ALLOWED.message);
      }
    }

    // Verifica se cliente já é cadastrado
    const client = clienteLabeBank.find(
      (client) => client.cpf === dadosUsuario.cpf
    );
    if (client) {
      throw new Error(messageStatus.USER_EXISTS.message);
    }

    // Cadastro de novo usuário
    const novoCliente: InfoConta = {
      id: gerarId(20),
      nome: dadosUsuario.nome,
      cpf: dadosUsuario.cpf,
      dataNasc: dadosUsuario.dataNasc,
      saldo: 0,
      extrato: [],
    };
    clienteLabeBank.push(novoCliente);

    res
      .status(messageStatus.CREATED.status)
      .send(messageStatus.CREATED.message);
  } catch (error: any) {
    switch (error.message) {
      case messageStatus.MISSING_PARAMETERS.message:
        res
          .status(messageStatus.MISSING_PARAMETERS.status)
          .send(messageStatus.MISSING_PARAMETERS.message);
        break;
      case messageStatus.NOT_ALLOWED.message:
        res
          .status(messageStatus.NOT_ALLOWED.status)
          .send(messageStatus.NOT_ALLOWED.message);
        break;
      case messageStatus.USER_EXISTS.message:
        res
          .status(messageStatus.USER_EXISTS.status)
          .send(messageStatus.USER_EXISTS.message);
        break;
      default:
        res
          .status(messageStatus.SOME_ERROR.status)
          .send(messageStatus.SOME_ERROR.message);
    }
  }
});

// End point para busca de usuários
app.get("/clientes", (req: Request, res: Response) => {
  try {
   if (clienteLabeBank.length <= 0) {
      throw new Error(messageStatus.NOT_FOUND.message)      
   }

   res.status(messageStatus.SUCCESS.status).send(clienteLabeBank)

  } catch (error: any) {
    switch (error.message) {
      case messageStatus.NOT_FOUND.message:
        res
          .status(messageStatus.NOT_FOUND.status)
          .send(messageStatus.NOT_FOUND.message);
        break;
      default:
        res
          .status(messageStatus.SOME_ERROR.status)
          .send(messageStatus.SOME_ERROR.message);
    }
  }
});

// End point Consulta saldo em conta de cliente específico
app.get("/saldo-conta/:nome", (req:Request, res: Response) => {
   try {
      const clientNome = req.params.nome as string;
      const clientCpf = req.query.cpf as string;

// Verifica se foram passados todos os dados de busca
      if(!clientNome || !clientCpf) {
         throw new Error(messageStatus.MISSING_PARAMETERS.message)         
      }

// Realiza a busca pelo usuário
      const client = clienteLabeBank.find((client) => 
      client.nome.toUpperCase() === clientNome.toUpperCase() && client.cpf === clientCpf)

// Caso não seja encontrado
      if (!client) {
         throw new Error(messageStatus.USERS_NOT_FOUND.message)
      }

// Consulta saldo
      const saldo = client.saldo as number

// Mostra Saldo
const newBalance = saldo.toFixed(2).split(".");
newBalance[0] = newBalance[0].split(/(?=(?:...)*$)/).join(".");
newBalance.join(",");

res
  .status(messageStatus.SUCCESS.status)
  .send(`Seu Saldo é de R$ ${newBalance}`);

   } catch (error: any) {
      switch (error.message) {
         case messageStatus.MISSING_PARAMETERS.message:
           res
             .status(messageStatus.MISSING_PARAMETERS.status)
             .send(messageStatus.MISSING_PARAMETERS.message);
           break;
         case messageStatus.NOT_FOUND.message:
           res
             .status(messageStatus.NOT_FOUND.status)
             .send(messageStatus.NOT_FOUND.message);
           break;
         default:
           res
             .status(messageStatus.SOME_ERROR.status)
             .send(messageStatus.SOME_ERROR.message);
       }
   }
})

// CRÉDITO
app.patch("/deposito/:nome", (req:Request, res: Response) => {
  try {
    const dadosCliente = req.body
    const novoExtrato = dadosCliente.extrato.toUpperCase()

// Verifica os dados informados
    if(
      !dadosCliente.nome ||
      !dadosCliente.cpf ||
      !dadosCliente.valor ||
      !dadosCliente.descricao ||
      novoExtrato.toUpperCase() !== MOVIMENTACAO.CREDITO
    ) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message)      
    }

    const buscaCliente = clienteLabeBank.find((client) => {
      client.nome.toUpperCase() === dadosCliente.nome.toUpperCase() && client.cpf === dadosCliente.cpf
      return client
    })

    if(buscaCliente) {
      throw new Error(messageStatus.USERS_NOT_FOUND.message)      
    }

// Confirmação de data
const data = new Date();
const novaData =
  String(data.getDate()).padStart(2, "0") +
  "/" +
  String(data.getMonth() + 1).padStart(2, "0") +
  "/" +
  data.getFullYear()

// Informações para depósito
clienteLabeBank.forEach((client: any) => {
  if(client.id === buscaCliente.id) {
    client.saldo = client.saldo
    client.extrato = [
      ...client.extrato,
      {
        valor: dadosCliente.valor,
        data: novaData,
        descricao: novoExtrato
      }
    ]
  }
  return client
})

res.status(messageStatus.SUCCESS.status).send(messageStatus.SUCCESS.message)

  } catch (error: any) {
    switch (error.message) {
      case messageStatus.MISSING_PARAMETERS.message:
        res
          .status(messageStatus.MISSING_PARAMETERS.status)
          .send(messageStatus.MISSING_PARAMETERS.message);
        break;
      case messageStatus.NOT_FOUND.message:
        res
          .status(messageStatus.NOT_FOUND.status)
          .send(messageStatus.NOT_FOUND.message);
        break;
      default:
        res
          .status(messageStatus.SOME_ERROR.status)
          .send(messageStatus.SOME_ERROR.message);
    }
  }
})

// DÉBITO
app.put("/retirada/:nome", (req:Request, res: Response) => {
  try {
    
  } catch (error: any) {
    
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
