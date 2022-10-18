import { UserController } from './controller/UserController';
import {app} from "./app"

const userController = new UserController()


// Criar novo Usuário
app.post('/createUser', userController.createUser)

// Buscar todos os Usuários
app.get("/allUser", userController.getUsers);

// Deletar usuário por id
app.delete("/user/:id", userController.deleteUser);