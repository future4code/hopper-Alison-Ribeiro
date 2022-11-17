import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()

// Criar Usuário
userRouter.post("/create", userController.create)

//Buscar por usuários
userRouter.get("/all", userController.getAll)