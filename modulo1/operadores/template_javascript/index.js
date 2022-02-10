/* Escrita - 1
const bool1 = true
const bool2 = false
const bool3 = !bool2 //(o contrário de false é true, logo bool3 = true)

let resultado = bool1 && bool2
console.log("a. ", resultado) //(false, pois um dos valores é false)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //(false, pois um dos valores é false)

resultado = !resultado && (bool1 || bool2) //(resultado recebeu anteriormente false e !false é true e true ou false é true)
console.log("c. ", resultado) //(resultado no final fica true, pois true e true, resulta em true)

console.log("d. ", typeof resultado) //(esses são valores booleanos, deve retornar booleans)
*/

/* Escrita - 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // não dará certo, pois os valores recebidos são como String e para arrumar deverá converter com o comando Number(nomeVariavel)
*/

/* Escrita - 3
//Solução
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/

/*
// Exercício - Código 1
let idadeUsuario = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade de seu(sua) melhor amigo(a)?"))
console.log("Sua idade é maior do que a do seu amigo(a)?", idadeUsuario > idadeAmigo)
console.log(idadeUsuario - idadeAmigo)
*/

/*
// Exercício - Código 2
let numeroPar = Number(prompt("Digite um número par!"))
console.log(numeroPar % 2)
// quando o ussuário digita um valor par retorna 0 (zero)
// quando o usuário digita um valor ímpar retorna 1 (um) que seria o resto da divisão por 2
*/

/*
// Exercício - Código 3
let idadeAnos = Number(prompt("Quantos anos você tem?"))
idadeMeses = idadeAnos * 12
console.log("Você viveu ", idadeMeses, "meses (aproximadamente).")
idadeDias = idadeAnos * 365
console.log("Você viveu ", idadeDias, "dias (aproximadamente).")
idadeHoras = idadeDias * 24
console.log("Você viveu ", idadeHoras, "horas (aproximadamente.")
*/

/*
// Exercício - Código 4
let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))
console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 == numero2)
console.log("O primeiro número é divisível pelo segundo?", ((numero1 % numero2) == 0))
console.log("O segundo número é divisível pelo primeiro?", ((numero2 % numero1) == 0))
*/

/*
// Desafio 1
let grausCelsius
let grausFahren
let grausKelvin
let grausKelvinConvF = ((grausKelvin - 273,15)*(1.8) + 32)
let grausKelvinConvC = (grausKelvin - 273,15)
let grausCelsiusConvK = (grausCelsius + 273,15)
let grausCelsiusConvF = ((grausCelsius * (1,8)) + 32)
let grausFahrenConvC = ((grausFahren - 32) * 5/9)
let grausFahrenConvK = ((grausFahren - 32) * 5/9 + 273,15)

console.log("Convertendo 77°F em Kelvin", grausFahrenConvK)
*/