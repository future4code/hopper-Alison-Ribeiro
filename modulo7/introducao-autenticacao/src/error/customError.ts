export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

//Dados Faltando
export class InvalidData extends CustomError{
    constructor(){
        super(400, "Faltando Dados.")
    }
}

//Nome inválido
export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

//Email inválido
export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

//Senha incorreta
export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

//Usuário não encontrado
export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

//Usuário não autorizado
export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}