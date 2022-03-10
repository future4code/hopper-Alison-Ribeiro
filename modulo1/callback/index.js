// Exercício de interpretação 1
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array) // imprime o item, no caso o objeto do array, o indice em que se encontra e o próprio array.
  })
// Será impresso as informações do array. conteúdo, indice em que se encontra e o próprio array original.
  */

// Exercício interprertação 2
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => { // mapeia o array usuários
     return item.nome // solicita que seja retornado somente a informação nome do objeto.
  })
  
  console.log(novoArrayB) // imprime o resultado dos nomes contidos nos objetos do array.
  */

  // exercício interpretação 3
/*
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => { // filtra o contrúdo do array usuários para solicitar algo
     return item.apelido !== "Chijo" // pede para retornar tudo o que for diferente de "Chijo", ou seja, o que houver chijo será ignorado
  })
  
  console.log(novoArrayC) // imprime o resultado do filtro, excluiu o objeto no indice 2, retornou somente o indice 0 e 1
  */

  // Ecercício escrita 1
/*
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// a)
const nomesPets = pets.map((item, index, array) => { 
    return item.nome 
 })
 
 console.log(nomesPets) 
 // b)
 const racaPets = pets.filter((item, index, array) => { 
    return item.raca === "Salsicha"
 })
 
 console.log(racaPets)
 // c)
 const tosaPets = pets.filter((item, index, array) => { 
    return item.raca === "Poodle"
 })
 
 const premioPets = tosaPets.map((item, index, array) => { 
    return item.nome 
 })

 for(let i = 0; i <= tosaPets.length; i++) {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${premioPets[i]}!`)   
 }
 */
 // Exercício escrita 2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 // a)
 let produtosNome = produtos.map((nomeProd) => { 
    return nomeProd.nome 
 })
 console.log(produtosNome)
// b)
let produtoDesconto = produtos.map((item) => {
    return{
        nome: item.nome,
        preco: (item.preco*0.95).toFixed(2).replace(".",",")
    }
})
console.log(produtoDesconto)
// c)
let produtoBebidas = produtos.filter((bebi) => {
    return bebi.categoria === "Bebidas"
})
console.log(produtoBebidas)
// d)
let produtoYpe = produtos.filter((ype) => {
    return ype.nome.includes("Ypê")
})
console.log(produtoYpe)

// e)
let produtoYpePromo = produtos.filter(ype => ype.nome.includes("Ypê")).map(ype => `Compre ${ype.nome} por ${ype.preco}`)

    console.log(produtoYpePromo)  