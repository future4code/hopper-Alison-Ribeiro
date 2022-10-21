import { CustomError } from './CustomError';

export class InvalidRequest extends CustomError {
    constructor(){
        super(400, "Requisição inválida, um ou mais campos vazios")
    }
}

// try {
    
// } catch (error) {
//     throw new CustomError(error.statusCode, error.message || error.sqlMessage);
    
// }