// 1. 10, 5
// 2. 10, 10, 10
// 3. diaQtdHora e diaValor

// Exercício 1
let nomeUsuario
let idadeUsuario
console.log(typeof nomeUsuario, typeof idadeUsuario)
// as variáveis não receberam nenhum valor para que fosse classificado
nomeUsuario = prompt("Qual o seu nome?")
idadeUsuario = prompt("Qual sua idade?")
console.log(nomeUsuario, idadeUsuario)
console.log(typeof nomeUsuario, typeof idadeUsuario)
// as variáveis que receberem um valor a partir do prompt serão do tipo string
console.log("Olá ", nomeUsuario, " você tem ", idadeUsuario, " anos de idade.")

// Exercício 2
let corUsuario = prompt("Sua roupa é verde? Sim/Não")
let filmeUsuario = prompt("Já assistiu Poeira em Alto Mar? Sim/Não")
let musicaUsuario = prompt("Já escutou ópera? Sim/Não")
console.log("Sua roupa é verde? - ", corUsuario)
console.log("Já assistiu Poeira em Alto Mar? - ", filmeUsuario)
console.log("Já escutou ópera? - ", musicaUsuario)

// Exercício 3
let a = 10
let b = 25
let c = a
a = b
b = c
console.log("O novo valor de a é ", a)
console.log("O novo valor de b é ", b)
