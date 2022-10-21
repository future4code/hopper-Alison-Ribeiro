import { UserBusiness } from './../business/UserBusiness';
import { UserInputDTO } from './../model/userDTO';
import { Request, Response } from "express";
import { CustomError } from "../error/CustomError";

export class UserController {
    async create( req: Request, res: Response) :Promise<void> {
        try {
            const {name, email, password} = req.body

            const input: UserInputDTO = {
                name,
                email,
                password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.create(input)

            res.status(201).send({ message: "Usuário cadastrado com sucesso" });

        } catch (error) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage);
        }
    }
}