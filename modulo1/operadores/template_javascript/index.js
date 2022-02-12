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
let grausCelsius = 0
let grausFahren = 0
let grausKelvin = 0


//let grausKelvinConvF = ((grausKelvin - 273.15)*(1.8) + 32)
//let grausKelvinConvC = (grausKelvin - 273.15)
//let grausCelsiusConvK = (grausCelsius + 273.15)
//let grausCelsiusConvF = ((grausCelsius * (1.8)) + 32)
//let grausFahrenConvC = ((grausFahren - 32) * 5/9)
//let grausFahrenConvK = ((grausFahren - 32) * 5/9 + 273.15)

// Desafio 1 - a)
grausFahren = 77
let grausFahrenConvK = ((grausFahren - 32) * 5/9 + 273.15)
console.log("Convertendo 77°F em Kelvin", grausFahrenConvK, "°K")

grausCelsius = 80
let grausCelsiusConvF = ((grausCelsius * (1.8)) + 32)
console.log("Convertendo 80°C em Fahrenhein", grausCelsiusConvF, "°F")

grausCelsius = 30

let grausCelsiusConvK = (grausCelsius + 273.15)
grausCelsiusConvF = ((grausCelsius * (1.8)) + 32)
console.log("Convertendo 30°C em Fahrenhein e Kelvin", grausCelsiusConvF, "°F", grausCelsiusConvK, "°K")

grausCelsius = Number(prompt("Digite quantos graus Ceusius deseja converte para Fahrenhein e Keiln:"))
grausCelsiusConvK = (grausCelsius + 273.15)
grausCelsiusConvF = ((grausCelsius * (1.8)) + 32)
console.log("Convertendo 30°C em Fahrenhein e Kelvin", grausCelsiusConvF, "°F", grausCelsiusConvK, "°K")
*/

/*
// Desafio 2
const valorKWh = 0.05
let consumoKWh = Number(prompt("Qual o seu consumo em KWh?"))
const descontoValor = 0.15

let valorAPagar = valorKWh * consumoKWh
console.log("O valor total a ser pago é de R$ ", valorAPagar)

let valorComDesc = (valorAPagar * (descontoValor - 1))* -1
console.log("O valor com desconto é de R$ ", valorComDesc)
*/

/*
// Desafio 3
// medidaKgEmLb = medidaKg / 0.45359237
// medidaLbEmKg = medidaLb * 0.45359237
// medidaLbEmOz = medidaLb *16
// medidaOzEmLb = medidaOz / 16
// medidaKgEmOz = medidaKg * 0.02834952
// medidaOzEmKg = medidaOz / 0.02834952
// medidaMEmMi = medidaM * 0.00062137
// medidaMiEmM = medidaMi / 0.00062137
// medidaFtEmM = medidaFt / 3.2808
// medidaMEmFt = medidaM * 3.2808
// medidaGlEmLt = medidaGl / 0.26417
// medidaLtEmGl = medidaLt * 0.26417
// medidaXiEmLt = medidaXi * (6 / 25)
// medidaLtEmXi = medidaLt * (25 / 6)

// a)
let medidakg = 0
let medidaLb = 0
let medidaLbEmKg = medidaLb * 0.45359237

medidaLb = 20
medidaLbEmKg = medidaLb * 0.45359237
console.log("Convertendo Lb em Kg: ", medidaLb, "libras equivale a ", medidaLbEmKg, "Kg")

// b)
let medidaOz = 0
let medidaOzEmKg = medidaOz / 0.02834952

medidaOz = 10.5
medidaOzEmKg = medidaOz / 0.02834952
console.log("Convertendo Oz em Kg: ", medidaOz, "onça equivale a ", medidaOzEmKg, "Kg")

// c)
let medidaMi = 0
let medidaMiEmM = medidaMi / 0.00062137
let medidaM = 0

medidaMi = 100
medidaMiEmM = medidaMi / 0.00062137
console.log("Converte Mi em M: ", medidaMi, "milhas equivale a ", medidaMiEmM, "metros")

// d)
let medidaFt = 0
let medidaFtEmM = medidaFt / 3.2808

medidaFt = 50
medidaFtEmM = medidaFt / 3.2808
console.log("Converte Ft em M: ", medidaFt, "pés equivale a ", medidaFtEmM, "metros")

// e)
let medidaGl = 0
let medidaGlEmLt = medidaGl / 0.26417

medidaGl = 103.56
medidaGlEmLt = medidaGl / 0.26417
console.log("Converte Gl em Lt: ", medidaGl, "galões equevale a ", medidaGlEmLt, "Litros")

// f)
let medidaXi = 0
let medidaXiEmLt = medidaXi * (6 / 25)

medidaXi = 450
medidaXiEmLt = medidaXi * (6 / 25)
console.log("Converte Xi em Lt: ", medidaXi, "xícara equivale a ", medidaXiEmLt, "Litros")

// g)
medidaMi = Number(prompt("Digite o valor em Milhas para converter em metros"))
medidaMiEmM = medidaMi / 0.00062137
console.log("Converte Mi em M: ", medidaMi, "milhas equivale a ", medidaMiEmM, "metros")
*/