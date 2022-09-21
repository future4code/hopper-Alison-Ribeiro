// Função para gerar um IP com tamanho definido
export const gerarId = ((len :number) => {
    let idAleat = ''

    do {
        idAleat += Math.random().toString(36).substring(2)
    } while (idAleat.length < len)
    idAleat = idAleat.substring(0, len)
    return idAleat
})

// Tipo usuário
export type Users = {
    id: string,
    name:string,
    email:string,
    password:string
}

// Tipo produtos
export type Product = {
    id:string,
    name:string,
    price:number,
    image_url:string
}

// Tipo Compras
export type Compras = {
    id: string,
    quantity: number,
    total_price: number
}