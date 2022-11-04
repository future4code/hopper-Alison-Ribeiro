import { Product } from "../models/Product";
import { PurchaseDB } from "../models/Purchase";
import { User } from "../models/User";

export const users: User[] = [
    new User ("101", "astrodev@gmail.com", "bananinha"),
    new User ("102", "fulano@gmail.com", "qwerty00"),
    new User ("103", "ciclana@gmail.com", "asdfg123")
]

export const products = [
    new Product("201", "Webcam", 99.00),
    new Product("202", "Teclado Gamer", 250.00),
    new Product("203", "Monitor", 459.99),
    new Product("204", "Impressora", 275.25),
    new Product("205", "Mouse Gamer", 399.99)
];

export const purchases: PurchaseDB[] = [
    new PurchaseDB("301", "101", "201", 1, 99.00),
    new PurchaseDB("302", "101", "203", 1, 459.99),
    new PurchaseDB("303", "101", "202", 2, 500.00)
]