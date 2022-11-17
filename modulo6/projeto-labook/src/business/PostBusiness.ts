import { PostDatabase } from './../data/PostDatabase';
import { generateId } from './../service/generateId';
import { InvalidRequest } from './../error/InvalidRequest';
import { CustomError } from '../error/CustomError';
import { PostInsertDTO } from './../model/postDTO';

export class PostBusiness {

    public create = async (input: PostInsertDTO) => {

        try {
            const {photo, description, type, created_at, author_id} = input

            if (!photo || !description || !type || !created_at || !author_id) {
                throw new InvalidRequest()
            }

            const id = generateId(20)

            const postDatabase = new PostDatabase()

            await postDatabase.createPost({
                id,
                photo,
                description,
                type,
                created_at,
                author_id
            })

        } catch (error) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage);
        }
    }
}