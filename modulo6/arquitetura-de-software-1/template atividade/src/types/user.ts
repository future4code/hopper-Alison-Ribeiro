export type user = {
    id: string,
    name: string,
    email: string,
    password: string
 }

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }

    public getPassword() {
        return this.password
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setPassword(newPassword: string) {
        this.password = newPassword
    }
}