import { InvalidRequest } from './../error/InvalidRequest';
import { PostDatabase } from './../data/PostDatabase';
import { CustomError } from "../error/CustomError";

export class GetPostBusiness {
    public getPost = async (input:string) => {
        try {
            const id = input

            const postDatabase = new PostDatabase()
            await postDatabase.getPost(id)


        } catch (error) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage);
        }
    }
}