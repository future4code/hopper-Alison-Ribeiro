import { CustomError } from "../error/CustomError";
import { Request, Response } from "express";
import {GetPostBusiness} from "../business/GetPostBusiness"

export class GetPostController {
    public getPost = async (req: Request, res: Response) => {
        try {
            const id = req.params.id

            const getPostBusiness = new GetPostBusiness()
            await getPostBusiness.getPost(id)

        } catch (error) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage);
        }
    }
}