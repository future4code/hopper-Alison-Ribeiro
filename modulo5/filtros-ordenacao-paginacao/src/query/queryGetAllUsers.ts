import connection from "../database/connection"

export async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

 export async function selectNameUser(user:any):Promise<any> {
    const result = await connection.("aula48_exercicio").where("name", "like", `%${user}%`)
 
    return result[0]
 }