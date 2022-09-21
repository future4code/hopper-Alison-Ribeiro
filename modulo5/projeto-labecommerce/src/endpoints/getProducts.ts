import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const getProducts = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const query = req.query.q;
    const sort = req.query.sort || "price";
    const order = req.query.order || "asc";
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const offset = limit * (page - 1);

    if (query) {
      const [result] = await connection(TABLE_PRODUCTS)
      .select()
      .where("name", "LIKE", `%${query}%`)
      .orderBy(`${sort}`, `${order}`)
      .limit(limit)
      .offset(offset)

      return res.status(200).send({ users: result });
    }

    const [result] = await connection(TABLE_PRODUCTS)
    .select("*")
    .orderBy(`${sort}`, `${order}`)
    .limit(limit)
    .offset(offset)

    res.status(200).send({ users: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
