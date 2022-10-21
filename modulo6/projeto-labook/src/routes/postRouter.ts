import { PostController } from './../controller/PostController';
import express from "express";

export const postRouter = express.Router()

const postController = new PostController()

// Criar Usuário
postRouter.post("/create", postController.create)