/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    let cartasUsuario = []
    let cartasComp = []
    
    if(confirm("Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")){
    

       let rodadaValida = false
       while (!rodadaValida){
          cartasUsuario.push(comprarCarta())
          cartasUsuario.push(comprarCarta())
          cartasComp.push(comprarCarta())
          cartasComp.push(comprarCarta())
          if ((cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) ||
             (cartasComp[0].valor === 11 && cartasComp[1].valor === 11)) {
                cartasUsuario = []
                cartasComp = []
          } else {
             rodadaValida = true
          }
       }
    
       // Mostrar cartas do usuário e primeira do computador
       // Perguntar se o usuário deseja comprar mais até que ele diga que não
       let comprando = true
    
       while(comprando){
          let textos = ""
          let pontos = 0
          for (let carta of cartasUsuario){
             textos += carta.texto + " "
             pontos += carta.valor
          }
    
          if (pontos > 21){
             comprando = false
          } else {
             let confirmCompra = confirm(
                `Suas cartas são ${textos}. A carta revelada do computador é ${cartasComp[0].texto}.` +
                "\n"+ 
                "Deseja comprar mais uma carta?"
             )
          
             if (confirmCompra){
               cartasUsuario.push(comprarCarta())
             } else {
                comprando = false
             }
          }
       }
       
       // Cálculo dos pontos do usuário e do computador
       let pontosComputador = 0
       let pontosJogador = 0
       let textosComputador = ""
       let textosJogador = ""
    
       for (let carta of cartasComp){
          pontosComputador += carta.valor
          textosComputador += carta.texto + " "
       }
       for (let carta of cartasUsuario){
          pontosJogador += carta.valor
          textosJogador += carta.texto + " "
       }
    
       // Compra de cartas do computador
       if (pontosJogador <= 21){
          while (pontosComputador < pontosJogador && pontosComputador <= 21){
            cartasComp.push(comprarCarta())
             pontosComputador = 0
             textosComputador = ""
             for (let carta of cartasComp){
                pontosComputador += carta.valor
                textosComputador += carta.texto + " "
             }
          }
       }
      
       let resultado = ""
       // Verificação de quem ganhou
       if (pontosJogador > pontosComputador && pontosJogador <= 21){
          resultado = "O usuário ganhou!"
       } else if (pontosComputador > pontosJogador && pontosComputador <= 21){
          resultado = "O computador ganhou!"
       } else if (pontosComputador > 21 && pontosJogador <= 21){
          resultado = "O usuário ganhou!"
       } else if (pontosJogador > 21 && pontosComputador <= 21){
          resultado = "O computador ganhou!"
       } else {
          resultado = "Empate!"
       }
    
       // Imprimir cartas dos dois lados
       alert(
          `Usuario - Cartas: ${textosJogador} - Pontuação: ${pontosJogador}` + 
          "\n" + 
          `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` + 
          "\n" + 
          resultado
       )
       
    } else {
       alert("O jogo acabou.")
    }