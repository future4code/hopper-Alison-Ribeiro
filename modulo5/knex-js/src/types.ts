export type Funcionario = {
    id: string,
    nome: string,
    email: string
}

export const gerarId = ((len :number) => {
    let idAleat = ''

    do {
        idAleat += Math.random().toString(36).substring(2)
    } while (idAleat.length < len)
    idAleat = idAleat.substring(0, len)
    return idAleat
})