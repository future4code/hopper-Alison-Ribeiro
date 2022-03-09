// Exercício de interpretação 1
/*
let valor = 0 // Variável valor vale 0
for(let i = 0; i < 5; i++) { // variável i inicia em 0 e enquanto for menor que 5 irá entrar no loop e acrescentar 1
  valor += i // o que será executado, valor irá somar com i, sempre receberá seu valor + i, para cada loop
}
console.log(valor) // valor final de valor será 10, pois receberá 1, depois + 2, + 3 e + 4, a soma total será 10
// será impresso 10 no console
*/

// Exercício de interpretação 2
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30] // declaração de um array
for (let numero of lista) { // na variável numero receberá de lista (array)
  if (numero > 18) { // os números maiores de 18
		console.log(numero) // será impresso a variável número a cada looping, assim serão impressos os números 19 21 23 25 27 30
	}
}
*/

// Exercício de interpretação 3
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: ")) // solicita ao usuário que digite um número de linhas
let quantidadeAtual = 0 // uma variável recebe 0, a quantidade atual de linhas
while(quantidadeAtual < quantidadeTotal){ // enquanto a quantidadeAtual for menor que quantidadeTotal faça
  let linha = "" // variável de string
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){ // variável recebe 0, condição: enquanto asteriacos for menor que quantidadeAtual + 1 faça e asteriscos receberá + 1
    linha += "*" // variável linha receberá ela mesma + "*", a cada looping será acrescido + "*"
  }
  console.log(linha) // imprime valor de linha a cada looping
  quantidadeAtual++ // soma +1 à quantidade atual
} // o resultado seria *, **, ***, ****. Caso na estrutura de for a quantidadeAtual não recebesse +1 o resultado não chegaria a 4.
*/

// Exercício de escrita 1
/*
let animaisQtd = Number(prompt("Quantos animais de estimação você tem?"))
let nomeAnimais = []

if (animaisQtd != 0) {
    for(let i = 1; i <= animaisQtd; i++) {
        nomeAnimais.push(prompt("Informe o nome de seu pet (um de cada vez)"))
    }
    console.log(`O nome de seus pets: ${nomeAnimais}`)
} else {
    console.log("Que pena! Você pode adotar um pet.")
}
*/

// Exercícios de escrita 2

let numerosOriginais = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

/*
// a)
function imprime(fonte) {
for (let lista of fonte) {
    console.log(lista)
}
}
imprime(numerosOriginais)
*/
/*
// b)
function dividindo(fonte) {
for (let div of fonte) {
    console.log(div/10)
}
}
dividindo(numerosOriginais)
*/
/*
// c)
let numerosPares = []
function numeroPar(fonte) {
for (let par of fonte) {
    if (par % 2 == 0) {
        numerosPares.push(par)
    }
}
return numerosPares
}
console.log(numeroPar(numerosOriginais))
*/

// d)
/*
let stringArray = []
let indice = 0
function textoNoArray(fonte) {
     for (let texto of fonte) {
        stringArray.push(`O elemento do índex ${indice} é: ${texto}`)
    
    indice++
}
return stringArray
}

console.log(textoNoArray(numerosOriginais))
*/


/*
function novoArray(array2) {
    let stringArray2 = []
    for(let i = 0; i < array2.length; i++) {
        stringArray2.push(`O elemento do índex ${i} é: ${array2[i]}`)
    }
    return stringArray2
}
let msg = novoArray(numerosOriginais)
console.log(msg)
*/

/*
// resolução maior e menor
const maiorEMenorNumero = (arrayDeNumeros) => {
    let maiorNumero = 0
    let menorNumero = 0
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        let valorMaximo = arrayDeNumeros[i]
        
        if (i === 0) {
           
            maiorNumero = menorNumero = valorMaximo
        }
        if (valorMaximo > maiorNumero) {
            maiorNumero = valorMaximo
        }
        if (valorMaximo < menorNumero) {
            menorNumero = valorMaximo
        }
    }
    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
  }
  
  const array = [20, 30, 40, 10, 5, 26, 70, 1]
  maiorEMenorNumero(array)
*/

/*
  // outra resolução
  let maiorNumero = 0
for (var num of arrayOriginal){
    if(num > maiorNumero){
        maiorNumero = num
    }
}
let menorNumero = maiorNumero
for(var i = 0; i < arrayOriginal.length-1; i++){
    if(menorNumero>arrayOriginal[i]){
        menorNumero = arrayOriginal[i]
    }
}
console.log(`O maior número é ${maiorNumero}, e o menor número é ${menorNumero}`)
*/
  
// Desafios 1
