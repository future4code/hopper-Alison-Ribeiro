// export type Product = {
//     id: string,
//     name: string,
//     price: number
// }

export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number
    ){
        this.id = id
        this.name = name
        this.price = price
    }

    getId():string {
        return this.id
    }
    getName():string {
        return this.name
    }
    getPrice():number {
        return this.price
    }

    setId(newId:string) {
        this.id = newId
    }
    setName(newName:string) {
        this.name = newName
    }
    setPrice(newPrice:number) {
        this.price = newPrice
    }
}