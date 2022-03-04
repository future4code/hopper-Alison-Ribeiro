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

    console.log("Seja bem-vindo(a) ao nosso jogo, BlackJack! Divirta-se!")

    if(confirm("Quer jogar uma nova partida?") == true) {
      const cartaUsuario1 = comprarCarta() // Sorteia uma carta. Por exemplo, o rei de ouros
      const cartaUsuario2 = comprarCarta()
      const cartaComp1 = comprarCarta()
      const cartaComp2 = comprarCarta()

      
      let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
      let somaComp = cartaComp1.valor + cartaComp2.valor

      
      console.log(`Suas cartas: ${cartaUsuario1.texto} e ${cartaUsuario2.texto} Pontuação: ${somaUsuario}`) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
      console.log(`Cartas do Robô: ${cartaComp1.texto} e ${cartaComp2.texto} Pontuação: ${somaComp}`) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

      if((somaUsuario) == (somaComp)) {
         console.log("Partida empatada, jogue novamente. (F5)")
      } else if((somaUsuario <= 21) && (somaUsuario > somaComp) || somaComp > 21) {
         console.log("Você venceu essa partida!")
      } else {
         console.log("Você perdeu! Tente novamente. (F5)")
      }

    } else {
       console.log("Jogo Acabou! Obrigado e volte sempre!")
    }