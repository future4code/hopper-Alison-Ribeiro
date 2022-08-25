import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User, Users, UserType } from "./dados";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// Método GET
// "/usuarios"
app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.query.name

        if(!name) {
            errorCode = 422
            throw new Error("Falta o parâmetro de busca!");
        }

        const usuariroD = Users.find((u) => {
            return u.name === name
        })

        if(!usuariroD) {
            errorCode = 404
            throw new Error("Usuário não encontrrado!")            
        }

        res.status(200).send(usuariroD)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
});

// Exercício 2
// Foi criado um enum e passado como referência, no arquivo dados.ts

// Exercício 3
// Para buscas é utilizado GET
app.get("/usuario", (req: Request, res: Response) => {
    let errorCode = 400
  try {
    const nome = req.query.name as string

    if(!nome){
        errorCode = 422
        throw new Error("Falta o parâmetro!");
    }

    const usuarioB = Users.find((u) => {
        return u.name.toLowerCase() === nome.toLowerCase()
    })

    if(!usuarioB) {
        errorCode = 404
        throw new Error("Usuário não encontrado");
    }

    res.status(200).send(usuarioB)

  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// Exercício 4
app.post("/add-usuario", (req: Request, res: Response) => {
    let errorCode = 400
  try {
    const { name, email, type, age } = req.body;
    
    if (!name || !email || !type || !age) {
        errorCode = 422
      throw new Error("Ausência de parâmetro!")
    }

    if(type.toUpperCase() !== UserType.ADMIN && type.toUpperCase() !== UserType.NORMAL) {
        errorCode = 422
        throw new Error("Inserir um tipo de usuário válido:'NORMAL' ou 'ADMIN'");
        
    }

    const novoUsuario = {
      id: Users.length + 1,
      name,
      email,
      type,
      age
    }
    
    Users.push(novoUsuario);

    res.status(200).send(Users);

  } catch (error: any) {
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
