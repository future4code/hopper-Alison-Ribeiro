// export type User = {
//     id: string,
//     email: string,
//     password: string
// }

export class User {
    constructor(
        private id: string,
        private email: string,
        private password: string
    ){
        this.id = id
        this.email = email
        this.password = password
    }

    getId():string {
        return this.id
    }
    getEmail():string {
        return this.email
    }
    getPassword():string {
        return this.password
    }

    setId(newId:string) {
        this.id = newId
    }
    setEmail(newEmail:string) {
        this.email = newEmail
    }
    setPassword(newPassword:string) {
        this.password = newPassword
    }
}