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
  let invert = array.reverse()
  return invert
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let ordem = array.sort((a, b) => a-b)
    return ordem
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
   let n2 = 0
   while (i < n) {
       numeroQtdPar.push(n2)
       n2 += 2
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
   
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novaPessoa = {...pessoa,
nome: "ANÔNIMO"}
return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}