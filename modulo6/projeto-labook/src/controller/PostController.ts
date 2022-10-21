import { PostBusiness } from './../business/PostBusiness';
import { PostInsertDTO } from './../model/postDTO';
import { Request, Response } from "express";
import { CustomError } from "../error/CustomError";

export class PostController {
    async create( req: Request, res: Response) :Promise<void> {
        try {
            const {photo, description, type, createdAt, authorId} = req.body

            const input: PostInsertDTO = {
                photo,
                description,
                type,
                createdAt,
                authorId
            }

            const postBusiness = new PostBusiness()
            await postBusiness.create(input)

            res.status(201).send({ message: "Post criado com sucesso!" });

        } catch (error) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage);
        }
    }

    
}