import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase{
    private static TABLE_USER = "labook_users"

    async createUser ({id, name, email, password}: any):Promise<void> {
        await UserDatabase.connection(UserDatabase.TABLE_USER)
           .insert({
              id,
              name,
              email,
              password
           })

       
     
        }
}