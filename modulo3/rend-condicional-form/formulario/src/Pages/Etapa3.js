import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
justify-content: center;
`
const Lista = styled.ol`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;
`

class Etapa3 extends React.Component {

  render () {

    return (
      <MainContainer>
        <Lista start={7}>
          <h1>Informações Gerais de ensino</h1>
          <li>Por que você não terminou um currso de graduação?</li>
          <input></input>
          <li>Você fez algum curso complementar?</li>
          <select>
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de Inglês</option>
          </select>
          </Lista>
      </MainContainer>
    );
  }
}

export default Etapa3;