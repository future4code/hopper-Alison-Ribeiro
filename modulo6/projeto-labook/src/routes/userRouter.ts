import { UserController } from './../controller/UserController';
import express from "express";

export const userRouter = express.Router()

const userController = new UserController()

// Criar usuário
userRouter.post("/create", userController.create)