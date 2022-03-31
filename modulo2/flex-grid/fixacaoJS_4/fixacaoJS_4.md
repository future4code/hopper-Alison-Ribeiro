```JS

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let quantidade = 0
  
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      quantidade++
    }
  }

if(quantidade === 0) {
  return "Número não encontrado"
} else {
  return "O número " + numeroEscolhido + " aparece " + quantidade + "x"
}


}

```