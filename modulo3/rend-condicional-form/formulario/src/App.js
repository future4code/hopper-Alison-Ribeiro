import React from "react";
import styled from "styled-components";
import Etapa1 from "./Pages/Etapa1";
import Etapa2 from "./Pages/Etapa2";
import Etapa3 from "./Pages/Etapa3";
import Agradecimento from "./Pages/Agradecimento";


const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

class App extends React.Component {

  render () {

    return (
      <MainContainer>
        <Etapa1 />
  
      </MainContainer>
    );
  }
}

export default App;
