/*
// Interpretação 1
let array
console.log('a. ', array) // valor da variável não definida, deverá aparecer Undefined

array = null
console.log('b. ', array) // o valor apresentado será null, o atribuído a variável

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // o valor apresentado será o de números de valores, no caso o 11

let i = 0
console.log('d. ', array[i]) // a variável i recebe valor 0, ao colocar i como "posição"/índice, o número 3 está no índice 0

array[i+1] = 19
console.log('e. ', array) // ao colocar o valor de um ídice já existente e atribuir um valor a ele, esse valor é substituído. o 19 entra no lugar do 4, que está no índice 1

const valor = array[i+6]
console.log('f. ', valor) // i vale 0, +6, fica 6, o número no índice 6 é o 9
*/

/*
// Interpretação 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // Após o usuário digitar uma frase, ela ficará toda em maiúsculo, trocará todas as vogais A por I e mostrará a quantidade de caracteres
// SUBI NUM ÔNIBUS EM MIRROCOS 27
*/
/*
// Exercício Código 1
let nomeUsuario = prompt("Digite seu nome")
let emailUsuario = prompt("Digite seu e-mail")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)
*/
// Exercício Código 2
let comidaFav = ["sushi", "feijoada", "paella", "yakissoba", "bobó de camarão"]
console.log(comidaFav)
console.log(`Essas são as minhas comidas preferidas:`)