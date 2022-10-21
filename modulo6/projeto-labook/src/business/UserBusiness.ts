import { UserDatabase } from './../data/UserDatabase';
import { generateId } from './../service/generateId';
import { InvalidRequest } from './../error/InvalidRequest';
import { CustomError } from '../error/CustomError';
import { UserInputDTO } from './../model/userDTO';

export class UserBusiness {

    public create = async (input: UserInputDTO) => {

        try {
            const {name, email, password} = input

            if (!name || !email || !password) {
                throw new InvalidRequest()
            }

            const id = generateId(20)

            const userDatabase = new UserDatabase()

            await userDatabase.createUser({
                id,
                name,
                email,
                password
            })
        } catch (error) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage);
        }
    }
}