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
export type USUARIO = {
    id: string,
    nome: string,
    nickname: string,
    email: string
}

export type EDITAUSUARIO = {
    nome: string,
    nickname: string
}

export type CADTAREFA = {
    id: string,
    titulo: string,
    descricao: string,
    data_limite: Date,
    usuario_criador_id: string
}