import { UserInputDTO } from './../model/userDTO';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

  async create(req: Request, res: Response):Promise<void> {

    try {
      const { name, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(req.body);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async getAll(req: Request, res: Response):Promise<void> {
    try {

     const userBusiness = new UserBusiness()
     const result = await userBusiness.getAll()

     res.status(200).send(result)
     
    } catch (error:any) {
     res.status(400).send(error.message);
    }
   }
}