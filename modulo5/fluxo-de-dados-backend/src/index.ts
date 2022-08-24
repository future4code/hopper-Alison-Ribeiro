import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Produtos } from "./data";
import { resolveSoa } from "dns";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!🏓");
});

// Exercício 3
const Errors: { [chave: string]: { status: number; message: string } } = {
  MISSING_PARAMETER: {
    status: 401,
    message: "Faltando algum parâmetro, consulte a documentação.",
  },
  TYPE_NAME_INVALID: {
    status: 401,
    message: "Tipo do parâmetro nome inválido",
  },
  TYPE_PRICE_INVALID: {
    status: 401,
    message: "Tipo do parâmetro preco inválido",
  },
  VALUE_PRICE_INVALID: {
    status: 401,
    message: "Valor do parâmetro preco zerado ou menor que zero",
  },
  SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
};

app.post("/add-produto", (req: Request, res: Response) => {
  try {
    const nome = req.body.nome as string;
    const preco = req.body.preco as number;

    if (!nome || !preco) {
      throw new Error(Errors.MISSING_PARAMETER.message);
    }
    if (typeof nome !== "string") {
      throw new Error(Errors.TYPE_NAME_INVALID.message);
    }
    if (typeof preco !== "number") {
      throw new Error(Errors.TYPE_PRICE_INVALID.message);
    }
    if (preco < 0 || preco == 0) {
      throw new Error(Errors.VALUE_PRICE_INVALID.message);
    }

    const novoProduto = {
      id: Math.random(),
      nome,
      preco,
    };

    Produtos.push(novoProduto);

  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETER.message:
        res
          .status(Errors.MISSING_PARAMETER.status)
          .send(Errors.MISSING_PARAMETER.message);
        break;
      case Errors.TYPE_NAME_INVALID.message:
        res
          .status(Errors.TYPE_NAME_INVALID.status)
          .send(Errors.TYPE_NAME_INVALID.message);
        break;
      case Errors.TYPE_PRICE_INVALID.message:
        res
          .status(Errors.TYPE_PRICE_INVALID.status)
          .send(Errors.TYPE_PRICE_INVALID.message);
        break;
      case Errors.VALUE_PRICE_INVALID.message:
        res
          .status(Errors.VALUE_PRICE_INVALID.status)
          .send(Errors.VALUE_PRICE_INVALID.message);
        break;
      default:
        res
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message);
        break;
    }
  }
  res.status(201).send(Produtos)
});

// Exercício 4
app.get("/todos-produtos", (req:Request, res:Response) =>{
    const listaProdutos = Produtos.map(produto => produto)
    res.status(200).send(listaProdutos)
})

// Exercício 5
const ErrorsEdit:{[chave:string]:{status:number,message:string}}={
    MISSING_PARAMETER:{status:401,message:"Ausência de Parâmetro preco"},
    TYPE_PRICE_INVALID:{status:401,message:"Tipo do parâmetro preco inválido"},
    VALUE_PRICE_INVALID:{status:401,message:"Valor do parâmetro preco zerado ou menor que zero"},
    PRODUCT_NOT_FOUND:{status:401,message:"Produto não encontrado"},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"}
    }

    app.put("/edita-produto/:idProduto",(req:Request,res:Response)=>{
        try{
        const idProduto =Number(req.params.idProduto);
        const novoPreco=req.body.novoPreco
        const preco=req.body.preco
        if(!preco){
            throw new Error(ErrorsEdit.MISSING_PARAMETER.message)
        }
        if(typeof preco !== "number"){
            throw new Error(ErrorsEdit.TYPE_PRICE_INVALID.message)
        }
        if(preco<0||preco==0){
            throw new Error(ErrorsEdit.VALUE_PRICE_INVALID.message)
        }
        if(!idProduto){
            throw new Error(ErrorsEdit.PRODUCT_NOT_FOUND.message)
        }
        Produtos.map((produto)=>{
            if(produto.id==idProduto){
                produto.preco=novoPreco
            }else{
                throw new Error("Produto não encontrado");
                
            }
        })
        
        }catch(error:any){
            switch (error.message) {
                case ErrorsEdit.MISSING_PARAMETER.message:
                    res.status(ErrorsEdit.MISSING_PARAMETER.status).send(ErrorsEdit.MISSING_PARAMETER.message)
                    break;
                case ErrorsEdit.TYPE_PRICE_INVALID.message:
                    res.status(ErrorsEdit.TYPE_PRICE_INVALID.status).send(ErrorsEdit.TYPE_PRICE_INVALID.message)
                    break;
                case ErrorsEdit.VALUE_PRICE_INVALID.message:
                    res.status(ErrorsEdit.VALUE_PRICE_INVALID.status).send(ErrorsEdit.VALUE_PRICE_INVALID.message)
                    break;
                case ErrorsEdit.PRODUCT_NOT_FOUND.message:
                    res.status(ErrorsEdit.PRODUCT_NOT_FOUND.status).send(ErrorsEdit.PRODUCT_NOT_FOUND.message);
                    break;
                    default:
                        res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
                    break;
            }
        }
        res.send(Produtos)
    })

// Exercício 6



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
