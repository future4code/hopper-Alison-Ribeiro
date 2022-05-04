import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Etapa1 extends React.Component {

  render () {

    return (
      <MainContainer>
                  <h1>Informações Gerais</h1>
        <ol>
          <li>Qual o seu nome?</li>
          <input placeholder="Digite seu nome"></input>
          <li>Qual sua idade?</li>
          <input placeholder="Digite sua idade"></input>
          <li>Qual seu e-mail?</li>
          <input placeholder="Digite seu email"></input>
          <li>Qual sua escolaridade?</li>

        </ol>
  
      </MainContainer>
    );
  }
}

export default Etapa1;