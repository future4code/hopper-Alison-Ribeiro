import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product, gerarId } from "./type";

export const cadProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price
        const image_url = req.body.image_url

        if (!name || !price || !image_url) {
            throw new Error("Parâmetros 'name', 'price' e/ou image_url faltando.")
        }

        if (typeof name !== "string" || typeof image_url !== "string") {
            errorCode = 422
            throw new Error("Parâmetro 'name' e 'image_url' devem ser no formato string.")
        }

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser no formato number.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number maior que 0.")
        }

        const newProduct: Product = {
            id: gerarId(20),
            name: name,
            price: price,
            image_url: image_url
        }

        await connection(TABLE_PRODUCTS)
        .insert({
            id: newProduct.id,
            name: newProduct.name,
            price: newProduct.price,
            image_url: newProduct.image_url
        })

        res.status(200).send({ product: newProduct, message: "Produto criado com sucesso." })
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}