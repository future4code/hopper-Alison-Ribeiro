import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_COMPRA, TABLE_PRODUCTS } from "../database/tableNames";
import { Compras, gerarId } from "./type";

export const regPurchase = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    const quantity = req.body.quantity;

    if (!product_id || !quantity || !user_id) {
      throw new Error("Faltam parâmetros");
    }

    if (quantity <= 0) {
      errorCode = 422;
      throw new Error("Insira uma quantidade de produto comprado");
    }

    const getProduct = async (productId: string): Promise<any> => {
      const result = await connection("TABLE_PRODUCTS")
        .select("name", "price")
        .where("id", "like", `${productId}`);

      return result[0];
    };

    const product = await getProduct(product_id);
    await connection("TABLE_COMPRA").insert({
      id: gerarId(20),
      user_id: user_id,
      product_id: product_id,
      quantity: quantity,
      total_price: product.price * quantity,
    });

    res.status(200).send("Compra registrada com sucesso.").end();

  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
