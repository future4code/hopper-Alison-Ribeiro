import { Request, Response } from "express"
import connection from "../database/connection"
import { products } from "../database/data"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price
        let id = Date.now().toString()

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        // const newProduct: Product = {
        //     id: Date.now().toString(),
        //     name,
        //     price
        // }

        const newProduct = new Product(id, name, price)

        await connection(TABLE_PRODUCTS).insert(newProduct)
        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}