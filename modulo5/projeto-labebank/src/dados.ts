export type Cliente = {
    nome: string,
    cpf: number | string,
    dataNasc: string | number
}

export enum MOVIMENTACAO {
    DEBITO = "SAQUE",
    CREDITO = "DEPÓSITO",
    TRANSF_ENVIO = "TRANSFERÊNCIA ENVIADA",
    TRANSF_RECEBIDA = "TRRANSFERÊNCIA RECEBIDA"
}

type Transacao = {
    valor: number,
    data: string | number,
    descricao: MOVIMENTACAO
}

type Conta = {
    id: number | string,
    saldo: number,
    extrato: Transacao[]
}

export type InfoConta = Cliente & Conta

export const gerarId = ((len :number) => {
    let idAleat = ''

    do {
        idAleat += Math.random().toString(36).substring(2)
    } while (idAleat.length < len)
    idAleat = idAleat.substring(0, len)
    return idAleat
})

export const clienteLabeBank: InfoConta[] = [
    {
        id: gerarId(20),
        nome: "Alison",
        cpf: 12345678900,
        dataNasc: "13/03/1982",
        saldo: 100000,
        extrato: [
            {
                valor: 200,
                data: "10/08/2022",
                descricao: MOVIMENTACAO.DEBITO
            },{
                valor: 600,
                data: "11/08/2022",
                descricao: MOVIMENTACAO.CREDITO
            }
        ]
    },
    {
        id: gerarId(20),
        nome: "Fulano",
        cpf: 12345658900,
        dataNasc: "13/04/1992",
        saldo: 1000,
        extrato: [
            {
                valor: 100,
                data: "09/08/2022",
                descricao: MOVIMENTACAO.DEBITO
            },{
                valor: 1600,
                data: "11/08/2022",
                descricao: MOVIMENTACAO.CREDITO
            }
        ]
    },
    {
        id: gerarId(20),
        nome: "Beltrano",
        cpf: 12345678910,
        dataNasc: "11/01/2000",
        saldo: 2000,
        extrato: [
            {
                valor: 800,
                data: "10/06/2022",
                descricao: MOVIMENTACAO.DEBITO
            },{
                valor: 100,
                data: "15/08/2022",
                descricao: MOVIMENTACAO.CREDITO
            }
        ]
    }
]