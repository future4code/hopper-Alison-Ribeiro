import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { Users, gerarId } from "./type";

export const cadUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        if(!name || !email || !password) {
            throw new Error("Parâmetros 'name', 'email' e/ou 'password' estão faltando");            
        }

        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            errorCode = 422
            throw new Error("Estes parâmetros devem ser string");            
        }

        const newUser: Users = {
            id: gerarId(20),
            name,
            email,
            password
        }

        await connection(TABLE_USERS)
        .insert({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })

        res.status(200).send({ user: newUser, message: "Usuário criado com sucesso." })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}