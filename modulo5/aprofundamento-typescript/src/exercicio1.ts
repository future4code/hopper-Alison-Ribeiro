const minhaString:string = "Alison"
// ao definir uma variável como string, ela aceitará somente string
const meuNumero:number = 40
// para que uma variável aceite mais de um tipo de valor devemos informar na definição da variável. ex: string | number

type person = {
    nome:string,
    idade:number,
    corFavorita:string
}

//exercicio 1
enum CorArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
    }
    
const pessoa: person = {
    nome: "Alison",
    idade: 40,
    corFavorita: CorArcoIris.AMARELO
}

console.log(pessoa)