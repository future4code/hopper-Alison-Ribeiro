// Função para gerar um ID
export const gerarId = ((len :number) => {
    let idAleat = ''

    do {
        idAleat += Math.random().toString(36).substring(2)
    } while (idAleat.length < len)
    idAleat = idAleat.substring(0, len)
    return idAleat
})

// Tipo de objeto definido
export type Usuario = {
    id: string,
    nome: string,
    nickname: string,
    email: string
}