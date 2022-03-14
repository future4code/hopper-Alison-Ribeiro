// Exercício de interpretação 1
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // canal: Globo, horario: 14h
*/

// Exercício de interpretação 2
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"} // os ... copia o conteúdo de cachorro

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // nome: Juca, idade: 3, raca: SRD
console.log(gato) // nome: Juba, idade: 3, raca: SRD
console.log(tartaruga) // nome: Jubo, idade: 3. raca: SRD

// ... é usado para copiar o conteúdo de um objeto, podendo ser alterado seu conteúdo sem mudar o original
*/

// Exercício de interpretação 3
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // false, ele buscou no objeto o valor da chave backender
console.log(minhaFuncao(pessoa, "altura")) // undefined, buscou no objeto por uma chave não definida

// Ao criar a function() foram dados dois parâmetros, que ao chamar a function() os dados de parâmetros foram inseridos em seus lugares. ficando: pessoa[backender] - string com a chave.
*/

// Exercício código 1
/*
//a)
const nomePessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

console.log(`Eu sou ${nomePessoa.nome}, mas pode me chamar de: ${nomePessoa.apelidos[0]}, ${nomePessoa.apelidos[1]} ou ${nomePessoa.apelidos[2]}`)
//b)
const outraPessoa = {
    ...nomePessoa,
    nome: "José",
    apelidos: ["Zé", "Zezin", "Mané"]
}

console.log(`Eu sou ${outraPessoa.nome}, mas pode me chamar de: ${outraPessoa.apelidos[0]}, ${outraPessoa.apelidos[1]} ou ${outraPessoa.apelidos[2]}`)
*/

//Exercício código 2

/*
const dadosPessoa = {
    nome: "Alison",
    idade: 39,
    profissao: "Programador"
}

console.log(dadosPessoa)

const dadosPessoa2 = {
    nome: "Bruna",
    idade: 31,
    profissao: "Professora"
}

console.log(dadosPessoa2)

function contaPessoas(pessoa1, pessoa2) {
    let dadosComp = [pessoa1, pessoa2]
    return dadosComp
}

console.log(contaPessoas(dadosPessoa, dadosPessoa2))

let informacao = [contaPessoas(dadosPessoa, dadosPessoa2)]

// console.log(`${contaPessoa(dadosPessoa.informacao[0])}, ${contaPessoa(informacao.length[0])}`)
*/

//Exercício código 3

var carrinho = []

