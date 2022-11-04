// type para tipar no typescript com camelCase
// export type Purchase = {
//     id: string,
//     userId: string,
//     productId: string,
//     quantity: number,
//     totalPrice: number
// }

export class Purchase {
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        private quantity: number,
        private totalPrice: number
    ){
        this.id = id
        this.userId = id
        this.productId = productId
        this.quantity = quantity
        this.totalPrice = totalPrice
    }
    getId():string {
        return this.id
    }
    getUserId():string {
        return this.userId
    }
    getProductId():string {
        return this.productId
    }
    getQuantity():number {
        return this.quantity
    }
    getTotalPrice():number {
        return this.totalPrice
    }
    setId(newId:string) {
        this.id = newId
    }
    setUserId(newUserId:string) {
        this.userId = newUserId
    }
    setProductId(newProductId:string) {
        this.productId = newProductId
    }
    setQuantity(newQuantity:number) {
        this.quantity = newQuantity
    }
    setTotalPrice(newTotalPrice:number) {
        this.totalPrice = newTotalPrice
    }
}

// type para tipar no banco de dados com snake_case
// export type PurchaseDB = {
//     id: string,
//     user_id: string,
//     product_id: string,
//     quantity: number,
//     total_price: number
// }

export class PurchaseDB {
    constructor(
        private id: string,
        private user_Id: string,
        private product_Id: string,
        private quantity: number,
        private total_Price: number
    ){
        this.id = id
        this.user_Id = id
        this.product_Id = product_Id
        this.quantity = quantity
        this.total_Price = total_Price
    }
    getId():string {
        return this.id
    }
    getUserId():string {
        return this.user_Id
    }
    getProductId():string {
        return this.product_Id
    }
    getQuantity():number {
        return this.quantity
    }
    getTotalPrice():number {
        return this.total_Price
    }
    setId(newId:string) {
        this.id = newId
    }
    setUserId(newUserId:string) {
        this.user_Id = newUserId
    }
    setProductId(newProductId:string) {
        this.product_Id = newProductId
    }
    setQuantity(newQuantity:number) {
        this.quantity = newQuantity
    }
    setTotalPrice(newTotalPrice:number) {
        this.total_Price = newTotalPrice
    }
}