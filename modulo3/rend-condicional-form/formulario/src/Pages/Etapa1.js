import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Lista = styled.ol`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;
`

class Etapa1 extends React.Component {

  render () {

    return (
      <MainContainer>
        <Lista>
          <h1>Informações Gerais</h1>
          <li>Qual o seu nome?</li>
          <input placeholder="Digite seu nome"></input>
          <li>Qual sua idade?</li>
          <input placeholder="Digite sua idade"></input>
          <li>Qual seu e-mail?</li>
          <input placeholder="Digite seu email"></input>
          <li>Qual sua escolaridade?</li>
          <select>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Incompleto</option>
            <option>Ensino Superior Completo</option>
          </select>
        </Lista>
  
      </MainContainer>
    );
  }
}

export default Etapa1;