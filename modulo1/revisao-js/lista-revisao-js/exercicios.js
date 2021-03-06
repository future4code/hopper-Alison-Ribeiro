// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  let tamanho = array.length
    return tamanho
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let invertido = []
  for (let i = array.length - 1; i >= 0; i--) {
      invertido.push(array[i])
  }
  return invertido
  //  let invert = array.reverse()
  //return invert
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
let tamanhoArray = array.length
for (let i = 0; i < tamanhoArray; i++) {
    for(let j = 0; j < (tamanhoArray - i - 1); j++) {
        if(array[j] > array[j+1]) {
            let auxiliar = array[j]
            array[j] = array[j+1]
            array[j+1] = auxiliar
            
        }
    }
    
}
return array

    // let ordem = array.sort((a, b) => a-b)
//    return ordem
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numeroPar = []
    for(let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
          numeroPar.push(array[i])
      }    
    }
   return numeroPar
   
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numeroPar = []
    for(let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
          numeroPar.push((array[i]*array[i]))
      }    
    }
   return numeroPar
   
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0
  for (let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
          maior = array[i]
      }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let meuObjeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: true,
        diferenca: 0
    }
    if (num1 > num2) {
        meuObjeto.maiorNumero = num1
        meuObjeto.maiorDivisivelPorMenor = (num1 % num2 === 0)
        meuObjeto.diferenca = num1 - num2
    } else {
        meuObjeto.maiorNumero = num2
        meuObjeto.maiorDivisivelPorMenor = (num2 % num1 === 0)
        meuObjeto.diferenca = num2 - num1
    }

    return meuObjeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numeroQtdPar = []
   let i = 0
   let numeroParProArray = 0
   while (i < n) {
       numeroQtdPar.push(numeroParProArray)
       numeroParProArray += 2
       i++
   }
return numeroQtdPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordem = array.sort((a, b) => a-b)
    let novoArray = []
    novoArray.push(array[array.length-2])
    novoArray.push(array[1])
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novaPessoa = {...pessoa,
nome: "ANÔNIMO"}
return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = pessoas.filter((usuario, indice, array) => {
    return (usuario.idade < 60) && (usuario.idade > 14) && (usuario.altura > 1.5)
       
   } )
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNAutorizadas = pessoas.filter((usuario, indice, array) => {
        return (usuario.idade >= 60) || (usuario.idade <= 14) || (usuario.altura < 1.5)
           
       } )
       return pessoasNAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.map((conta) => {
        let divida = conta.compras.reduce((valor1, valor2) => valor1 + valor2, 0)
        conta.saldoTotal -= divida
        conta.compras = []
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((nomeA, nomeB) => nomeA.nome.localeCompare(nomeB.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   return consultas.sort((consulta1, consulta2) => {
   let datatransformada1 = consulta1.dataDaConsulta.split("/").reverse().join("-")
   let datatransformada2 = consulta2.dataDaConsulta.split("/").reverse().join("-")

   return datatransformada1.localeCompare(datatransformada2)
   
   })
   
}