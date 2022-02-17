/*
// Exercícios Interpretação 1

function minhaFuncao(variavel) { // declarado a função
	return variavel * 5 // o retorno da função é pegar a variável e multiplicar por 5
}

console.log(minhaFuncao(2)) // ao "chamar" a função com o valor 2 irá pegar o valor e multiplicar por 5. 2*5 resultado 10
console.log(minhaFuncao(10)) // 10*5 resultado 50

// ao tirar o console.log() nada apareceu no console

*/

// Exercício Interpretação 2
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// A função irá pegar um conteúdo de um texto e deixá-lo todo em minúsculo e fará a verificação se há no conteúdo a palavra cenoura e retornar true, se houver ou false, caso não haja.

//a) true
//b) true
//c) true
*/

// Exercício Código 1.
/*
// a)
function imprimeFrase3 () {
    console.log("Eu sou Alison, tenho 39 anos, moro em Valparaiso e sou estudante.")
}
console.log(imprimeFrase3())
*/
/*
// b)

function imprimeFrase2(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro na cidade de ${cidade} e sou ${profissao}`)
    
}

console.log(imprimeFrase2("Alison", 39, "Valparaiso", "Webdesign"))
*/

// Exercício Código 2
/*
//a)
function somaSimples(num1, num2) {
    return num1 + num2
}

let resultado = somaSimples(3, 5)
console.log(resultado)
*/
/*
//b)
function maiorUoIgual(priNum, segNum) {
    return priNum >= segNum
}

let compara = maiorUoIgual(prompt("digite um numero"), prompt("Digite outro numero"))

console.log(compara)
*/
/*
//c)
function numPar(numeropar) {
    return numeropar % 2 == 0
}

let resultado2 = numPar(prompt("digite um número"))

console.log(resultado2)
*/
/*
//d)
function mensagemTAM(mensagem) {
    console.log(`O tamanho é: ${mensagem.length} da mensagem ${mensagem.toUpperCase()}`)
}

let recebeMsg = mensagemTAM(prompt("Digite uma mensagem"))

console.log(recebeMsg)
*/

// Exercício 3

function somaDeNum(nume1, nume2) {
    let soma = nume1 + nume2
    return soma
}
function subDeNum(nume3, nume4) {
    return nume3 - nume4
}
function multiDeNum(nume5, nume6) {
    return nume5 * nume6
}
function diviDeNum(nume7, nume8) {
    return nume7 / nume8
}
let valor1 = Number(prompt("Digite um número"))
let valor2 = Number(prompt("Digite outro múmero"))

console.log(`Números Inseridos: ${valor1} e ${valor2}\nSoma: ${somaDeNum(valor1, valor2)}\nDiferença: ${subDeNum(valor1, valor2)}\nMultiplicação: ${multiDeNum(valor1, valor2)}\nDivisão: ${diviDeNum(valor1, valor2)}`)