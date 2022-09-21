import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import {cadUsers} from './endpoints/cadUsuers'
import { getUsers } from "./endpoints/getUsers";
import { cadProduct } from './endpoints/cadProduct';
import { getProducts } from './endpoints/getProducts';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Post Cadastro Usuários
app.post("/users", cadUsers)

// Get users
app.get("/users", getUsers)

// POST cadastro de produto
app.post("/products", cadProduct)

// GET products
app.get("/products", getProducts)