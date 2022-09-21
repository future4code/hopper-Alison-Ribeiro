import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_COMPRA } from "../database/tableNames";
import { Compras, gerarId } from "./type";

export const regPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.body.user_id
        const product_id = req.body.product_id
        const quantity = req.body.quantity
        const total_price = req.body.total_price
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}