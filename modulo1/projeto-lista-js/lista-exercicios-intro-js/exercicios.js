// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let retAltura = prompt("Digite a ALTURA do retângulo")
  let retLargura = prompt("Digite a LARGURA do retângulo")

  console.log(retAltura * retLargura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Digite o ano atual")
  let anoNascimento = prompt("Digite seu ano de nascimento")

  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const usuarioNome = prompt("Digite seu nome")
  const usuarioIdade = prompt("Digite sua idade")
  const usuarioEmail = prompt("Digite seu e-mail")

  console.log(`Meu nome é ${usuarioNome}, tenho ${usuarioIdade} anos, e o meu email é ${usuarioEmail}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let usuarioCor1 = prompt("Digite suas três cores favoritas. COR1:")
  let usuarioCor2 = prompt("COR2:")
  let usuarioCor3 = prompt("COR3:")
  let usuarioCores = [usuarioCor1, usuarioCor2, usuarioCor3]

console.log(usuarioCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let arrayUltimo = array.length - 1
  return array[arrayUltimo]


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let arrayReserva = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = arrayReserva
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let stringCompara = string1.toUpperCase() === string2.toUpperCase()
  return stringCompara

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let rgAnoAtual = prompt("Informe o ano atual")
  let rgAnoNasci = prompt("Informe seu ano de Nascimento")
  let rgAnoEmissao = prompt("Informe o ano de emissão de seu RG")
  
  let idadeUsuario = rgAnoAtual - rgAnoNasci
  let rgTempo = rgAnoAtual - rgAnoEmissao

  let pessoa20Menos = (idadeUsuario <= 20) && (rgTempo >= 5)
  let pessoa20E50 = (idadeUsuario > 20) && (idadeUsuario <= 50)  && (rgTempo >= 10)
  let pessoa50Mais = (idadeUsuario > 50) && rgTempo >= 15
  
  if (pessoa20Menos == true) {
    console.log(pessoa20Menos)
  }
   else if (pessoa20E50 == true)
   {
     console.log(pessoa20E50)
   }
     else
  {
    console.log(pessoa50Mais)
  }
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let anoMult400 = ano % 400 == 0
  let anoMult4 = (ano % 4 == 0) && (ano % 100 != 0)
  let anoBissex = anoMult4 || anoMult400

  return anoBissex

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let maior18 = prompt("Você é maior de 18 anos? Sim/Não")
  let ensinoCompleto = prompt("Tem ensino médio completo? Sim/Não")
  let disponibHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Sim/Não")
  
  let alunoLabenu = (maior18.toLowerCase() == "sim") && (ensinoCompleto.toLowerCase() == "sim") && (disponibHorario.toLowerCase() == "sim")

  console.log(alunoLabenu)

}