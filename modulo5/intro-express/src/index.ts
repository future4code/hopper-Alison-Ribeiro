import express, {Request, response, Response} from "express";
import cors from 'cors';
import { AddressInfo } from "net";
import { type } from "os";

const app = express();

app.use(cors())
app.use(express.json());

// Exercicio 1
app.get('/', (response: Response) => {
    response.send("Servidor está online!")
})

// Exercício 2 - 3
type TypeUser = {id: number, name: string, phone: number, email: string, website:string}
// Exercicio 5
type TypePost = {id:number, title:string, body:string, userId:number}

let users:TypeUser[] = [
    {id: 1, name: "Alison", phone: 998521452, email: "alisonluri@gmail.com", website: "www.alisonluri.com.br"},
    {id: 2, name: "Fulano", phone: 998521452, email: "fulano@gmail.com", website: "www.fulano.com"},
    {id: 3, name: "Beltrano", phone: 987563214, email: "beltrano@gmail.com", website: "www.beltrano.com"},
    {id: 4, name: "Ciclano", phone: 987863254, email: "ciclano@gmail.com", website: "www.ciclano.com"}
]

let posts:TypePost[] = [
    {id:1, title:"Meu Post", body:"Estou escrevendo aqui o meu conteúdo. Obrigado!", userId:1},
    {id:2, title:"Seu Post", body:"Estou escrevendo aqui o seu conteúdo. De nada!", userId:2}
]
// conteúdo criado separadamente por serem conteúdos distintos, e por conter o campo userId que fará referência ao id do usuário

// Exercício 4
app.get("/todos", (request: Request, resonse: Response) => {
    const usuarios = users.map((user) =>{

        return user
    })
    resonse.status(200).send(usuarios)
})


// Exercício 7
app.get("/posts", (request: Request, resonse: Response) => {
    const usuarios = posts.map((post) =>{

        return post
    })
    response.status(200).send(posts)
})

// Exercício 8
app.get("/post", (request:Request, response:Response) => {
    const usuarioId = Number(request.query.id)

    if(!usuarioId) {
        response.status(400).send("Id obrigatório!")
    }


    let postado
    const post = posts.forEach(postou => {
        if(postou.userId == usuarioId){
            postado = postou

        }
    })
    response.send(postado)

})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;