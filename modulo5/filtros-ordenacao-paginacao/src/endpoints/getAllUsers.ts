import { Request, Response } from "express"
import {selectAllUsers, selectNameUser} from '../query/queryGetAllUsers'
import connection from "../database/connection"


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 // Exercicio 1
 export const getUser = async(req: Request,res: Response): Promise<void> =>{
    let user = req.query.name
    try {
       const users = await await connection.("aula48_exercicio").where("name", "like", `%${user}%`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }