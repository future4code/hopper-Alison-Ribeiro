import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercicio 1
app.get("/ping", (response: Response) => {
  response.send("Pong! 🏓");
});

// Exercício 2
type TypeAfazeres = {id: number, tarefa: string, status: boolean, idUser: number}

// Exercício 3
let afazeres:TypeAfazeres[] = [
  {id:1, tarefa:"lavar roupas", status:true, idUser:1},
  {id:2, tarefa:"estender roupas", status:true, idUser:1},
  {id:3, tarefa:"lavar louças", status:false, idUser:1},
  {id:4, tarefa:"organizar trabalho", status:false, idUser:2}
]

let novoAfazer:TypeAfazeres = {id:5, tarefa:"Executar trabalho", status:true, idUser:2}

// Exercício 4
app.get('/tarefas', (request:Request, response:Response) => {
  const tarefas = afazeres.filter((tarefa) => {
    return tarefa.status == true
  })
  response.status(200).send(tarefas)
})

// Exercicio 5
app.post('/adicionar-tarefa', (request:Request, response:Response) => {
  const tarefasAtualizadas = [...afazeres, novoAfazer]
  response.status(200).send(tarefasAtualizadas)
})

// Exercicio 6



// Exercicio 7
app.delete('/deletar-tarefa', (request:Request, response:Response) => {
  const tarefaId = Number(request.query.id)
  if (!tarefaId) {
    response.status(400).send("Id obrigatório")
  }
  const tarefaFora = afazeres.map((taref) => taref)

  const filtrotarefas = afazeres.filter((afazer) => {
    if(afazer.id !== tarefaId) {
      return true
    }
  })
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});