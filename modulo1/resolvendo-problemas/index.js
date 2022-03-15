// Revisão do JS
// Parte 1 - Variáveis
/*
let nomeDoProduto = prompt("Digite o nome do produto")
let precoDoProduto = Number(prompt("Digite o valor do produto"))
precoDoProduto -= 1

console.log(`O produto ${nomeDoProduto} custa ${(precoDoProduto).toFixed(2)}`)
*/
// Parte 2 - Operadores Aritiméticos
/*
let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))

console.log(`
A soma dos números é: ${num1 + num2}
A subtração dos números é: ${num1 - num2}
A multiplicação dos números é: ${num1 * num2}
A divisão dos números é: ${(num1 / num2).toFixed(2)}
O resto dessa divisão é: ${num1 % num2}
`)
*/
// Parte 3 - Comparadores
/*
let sorteio = Math.floor(Math.random() * 10) + 1
let numeroUsuario = Number(prompt("Digite um número de 1 a 10"))

console.log(`O número sorteado é: ${sorteio}`)

if (sorteio === numeroUsuario) {
    console.log("Seu número é igual")
} else if (sorteio > numeroUsuario) {
    console.log("Seu número é menor")
} else {
    console.log("Seu número é maior")
}
*/
// Parte 4 - Valores Lógicos
/*
let usuarioIdade = Number(prompt("Qual sua idade?"))
let usuarioAltura = prompt("Qual sua altura? (Em centímetros)")
let usuarioSaude = confirm("Tem algum problema cardíaco?")

if (usuarioIdade >= 18 && usuarioAltura >= 160 && usuarioSaude === "false") {
    console.log("Você pode entrar! Divirta-se!")
} else {
    console.log("Você não pode entrar!")
}
*/
// Perte 5 - strings
/*
let frase = " Hoje eu vou comer cenoura, ebaaa "

console.log(`${frase}=> possui ${(frase).length} caracteres`)
console.log(`${frase.trim()}`)
console.log(`${frase.toLowerCase()}`)
console.log(`Na frase possui a palavra "comer"? ${frase.includes("comer")}`)
console.log(`Na frase possui a palavra "batata"? ${frase.includes("batata")}`)

let novaFrase = frase.replaceAll("cenoura","batata")
console.log(`${novaFrase}`)
console.log(`Na frase possui a palavra "comer"? ${novaFrase.includes("comer")}`)
console.log(`Na frase possui a palavra "batata"? ${novaFrase.includes("batata")}`)
*/
// Parte 6 - Arrays
/*
let lista = ["batata", "cenoura", "beterraba"]

console.log(`Segundo ítem ${lista[1]}`)
console.log(`Tamanho da lista: ${lista.length}`)
lista.push("mandioca")
console.log(lista)
console.log(lista.includes("cenoura"))
lista.splice(1, 1)
console.log(lista)
*/
// Parte 7 - Funções
/*
let numerosVariados = [2, 4, 6, 9, 12]

function alterandoValores (array) {
    let um = array[0] / 2
    let ultimo = array[array.length-1] / 2

    array[0] = um
    array[array.length-1] = ultimo
    return array
}
console.log(alterandoValores(numerosVariados))
*/
// Parte 8 - Objetos
/*
let pessoaDados = {
    nome: "Alison",
    idade: 40,
    generoMusica: "MPB"
}
console.log(`O nome da pessoa é ${pessoaDados.nome}, tem ${pessoaDados.idade} anos e gosta de ${pessoaDados.generoMusica}`)

let pessoaDados2 = {
    ...pessoaDados,
    nome: "Bruna"
}
console.log(`O nome da pessoa é ${pessoaDados2.nome}, tem ${pessoaDados2.idade} anos e gosta de ${pessoaDados2.generoMusica}`)
*/

// Parte 9 - Condicionais
/*
let numeroAleat = Number(prompt("Digite um número qualquer"))

if (numeroAleat % 2 === 0) {
    console.log("Este número é PAR")
} else {
    console.log("Este número é ÍMPAR")
}

let animal = prompt("fale um animal")

switch (animal) {
    case "cachorro":
        console.log("Auauau")
        break;
    case "gato":
        console.log("miau")
        break
    case "vaca":
        console.log("muuuuu")
        break
    default:
        console.log("não reconhecido")
        break;
}
*/
// Parte 10 - Laços

let numerosRepeticao = [2, 4, 7, 32, 1, 9]

let i = 0
let maior = -Infinity
while (i < numerosRepeticao.length) {
    if(numerosRepeticao[i] > maior) {
        maior = numerosRepeticao[i]
    }
    i++
}
console.log(`O maior número é: ${maior}`)