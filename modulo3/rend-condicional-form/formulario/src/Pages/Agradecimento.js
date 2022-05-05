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

class Agradecimento extends React.Component {

  render () {

    return (
      <MainContainer>
        <Lista>
          <h1>Obrigado pelas Informações</h1>
          <p>Entreremos em contato em breve!</p>
        </Lista>  
      </MainContainer>
    );
  }
}

export default Agradecimento;