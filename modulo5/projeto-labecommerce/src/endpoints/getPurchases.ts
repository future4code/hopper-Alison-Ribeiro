import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_COMPRA, TABLE_USERS } from "../database/tableNames";

export const getPurchases = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const user_id = req.params.user_id;
    const sort = req.query.sort || "total_price";
    const order = req.query.order || "asc";
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const offset = limit * (page - 1);

    if(!user_id) {
        throw new Error("Usuario sem identificação");        
    }

    const result = await connection(TABLE_COMPRA)
      .select()
      .where("user_id", "=", `${user_id}`)
      .orderBy(`${sort}`, `${order}`)
      .limit(limit)
      .offset(offset);

    // const result = await connection(TABLE_COMPRA)
    //     .select()

    return res.status(200).send({ Compras: result });

  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
