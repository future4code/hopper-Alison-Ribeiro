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

class Etapa2 extends React.Component {

  render () {

    return (
      <MainContainer>
        <Lista start={5}>
          <h1>Informações do ensino superior</h1>
          <li>Qual curso?</li>
          <input></input>
          <li>Qual a unidade de Ensino?</li>
          <input></input>
        </Lista>
      </MainContainer>
    );
  }
}

export default Etapa2;