// Exercício de interpretação 1
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar") // solicita um número qualquer ao usuário
const numero = Number(respostaDoUsuario) // transforma a informação recebida como string em número

if (numero % 2 === 0) { // a condição é: se o número informado o resto de seu cálculo, divisão por dois, é igual a 0. Cálculo utilizado para saber se o número é par
  console.log("Passou no teste.") // executa essa mensagem no console
} else { // caso contrário
  console.log("Não passou no teste.") // executa esta mensagem no console
}

// b) números pares
// c) números ímpares
*/

// Exercícios de interpretação 2
/*
let fruta = prompt("Escolha uma fruta") // recebe pelo usuário a informação da fruta que ele quer saber o preço
let preco // variável que receberá o preço da fruta
switch (fruta) { // estrutura condicional
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
} // na estrutura "selecionará" o valor da fruta digitada pelo usuário
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) // informará para o usuário o preço da fruta digitada no prompt

// b) O preço da fruta maçã é R$ 2.25
// c) obtive a resposta somente retirando "break" do código. O que foi impresso é: "O preço da fruta Pêra é R$ 5", ou seja, ele saiu executando as outras informações até a última. A variável preço recebeu o últimmo valor atribuido.
*/

// Exercícios de interpretação 3
/*
const numero = Number(prompt("Digite o primeiro número.")) // solicita um número ao usuário e o converte de string para número

if(numero > 0) { // a condição diz: se o número digitado for maior que 0
  console.log("Esse número passou no teste") // caso seja true, executará esta linha da condição
	let mensagem = "Essa mensagem é secreta!!!" // declaração de uma variável
}

console.log(mensagem) // solicita que seja mostrado o conteúdo da variável declarada no bloco if, porém ao ser declarada como let dentro do bloco if ele não foi "reconhecido" e a mensagem de erro é apresentada como erro de variável não declarada
*/

// Exercício escrita de código 1
/*
let usuarioIdade = Number(prompt("Qual sua idade?"))

if (usuarioIdade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
*/

// Exercício escrita de código 2
/*
let estudanteTurno = prompt("Qual turno você estuda? M(matutino), V(vespertino ou N(noturno)")

if (estudanteTurno == "M") {
    console.log("Bom dia!")
} else if (estudanteTurno == "V") {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}
*/

// Exercício escrita de código 3
/*
let estudanteTurno = prompt("Qual turno você estuda? M(matutino), V(vespertino ou N(noturno)")

switch (estudanteTurno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")        
}
*/

// Exercício escrita de código 4
/*
let filmeGenero = prompt("Qual gênero de filme vai assistir?")
let valorIngresso = prompt("Qual o valor do ingresso?")

if (filmeGenero.toLowerCase() == "fantasia" && valorIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
*/

// Desafios 1
/*
let filmeGenero = prompt("Qual gênero de filme vai assistir?")
let valorIngresso = prompt("Qual o valor do ingresso?")

if (filmeGenero.toLowerCase() == "fantasia" && valorIngresso < 15) {
    let lanche = prompt("Qual lanche vai querer?")
    console.log("Bom filme!")
    console.log(`Aproveiite o seu ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}
*/

// Desafio 2

let nomeUsuario = prompt("Digite seu nome completo.").toUpperCase()
let jogoPublico = prompt("Informe o tipo de jogo deseja - DO para Doméstico ou IN para Internacional").toUpperCase()
let jogoFase = prompt("Qual faase deseja? SF Semi-Final, DT Decisão terceiro lugar ou FI Final").toUpperCase()
let jogoCategoria = Number(prompt("Qual categoria de ingressos deseja? 1, 2, 3 ou 4"))
let jogoQtdIngressos = Number(prompt("Informe a quantidade de ingressos:"))

let publico = ["DO", "IN"]
let fase = ["SF", "DT", "FI"]

let categoriaInfoReal = {
    categoria1: {
        valorReal1: 1320
        valorReal2: 660
        valorReal3: 1980
    }
    categoria2: {
        valorReal1: 880
        valorReal2: 440
        valorReal3: 1320
    }
    categoria3: {
        valorReal1: 550
        valorReal2: 330
        valorReal3: 880
    }
    categoria4: {
        valorReal1: 220
        valorReal2: 170
        valorReal3: 330
    }
}

let categoriaInfoDolar = {
    categoria1: {
        valorDolar1: 1320 / 4.1
        valorDolar2: 660 / 4.1
        valorDolar3: 1980 / 4.1
    }
    categoria2: {
        valorDolar1: 880 / 4.1
        valorDolar2: 440 / 4.1
        valorDolar3: 1320 / 4.1
    }
    categoria3: {
        valorDolar1: 550 / 4.1
        valorDolar2: 330 / 4.1
        valorDolar3: 880 / 4.1
    }
    categoria4: {
        valorDolar1: 220 / 4.1
        valorDolar2: 170 / 4.1
        valorDolar3: 330 / 4.1
    }
}

function publicoValores(info1, info2, info3)