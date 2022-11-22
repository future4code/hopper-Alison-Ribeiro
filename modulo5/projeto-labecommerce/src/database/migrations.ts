import connection from "./connection";
import { TABLE_PRODUCTS, TABLE_USERS, TABLE_COMPRA } from "./tableNames";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
};

const createTables = async () => {
  await connection.raw(`
    DROP TABLE IF EXISTS ${TABLE_USERS}, ${TABLE_PRODUCTS}, ${TABLE_COMPRA};

    CREATE TABLE IF NOT EXISTS ${TABLE_USERS}(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ${TABLE_PRODUCTS}(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(6,2) NOT NULL,
        image_url VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ${TABLE_COMPRA}(
        id VARCHAR(255) PRIMARY KEY,
        quantity INT NOT NULL,
        total_price INT,
        user_id VARCHAR(255),
        product_id VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES ${TABLE_USERS}(id),
        FOREIGN KEY (product_id) REFERENCES ${TABLE_PRODUCTS}(id)
    )
    `)
    .then(() => {
        console.log(`Tabelas ${TABLE_USERS}, ${TABLE_PRODUCTS} e ${TABLE_COMPRA} foram criadas com sucesso`)
    })
    .catch((error: any) => printError(error))
};
