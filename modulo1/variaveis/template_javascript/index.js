/* 1. resposta = 10, 5
let a = 10 
let b = 10
as variáveis a e b receberam a atribuição 10

console.log(b)
mostra o valor de b que é 10

b = 5
b recebe outro balor, 5

console.log(a, b)
os valores de a, b = 10, 5

*/
/* 2. resposta = 10, 10, 10
let a = 10
let b = 20
c = a -> c recebe 10, valor de a
b = c -> b recebe 10, valor de c
a = b -> a recebe 10, valor de b

console.log(a, b, c) -> resposta 10, 10, 10


*/
/* 3. resposta = diaQtdHora e diaValor

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

*/

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

// Desafio
let a1 = prompt("Digite um número")
let b1 = prompt("Digite outro número")
console.log("A soma dos números é: ", Number(a1)+Number(b1))
console.log("A multiplicação dos números: ", Number(a1)*Number(b1))
