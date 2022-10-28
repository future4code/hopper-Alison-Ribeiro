import { GetPostController } from './../controller/GetPostController';
import { PostController } from './../controller/PostController';
import express from "express";

export const postRouter = express.Router()

const postController = new PostController()

const getPostController = new GetPostController

// Criar Usuário
postRouter.post("/create", postController.create)

// Buscar post por Id
postRouter.get("/:id", getPostController.getPost)