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
align-items: center;
`
const Alinhamento = styled.div`
text-align: center;
`

class App extends React.Component {
  state ={
    etapa: 1
  }

  proximaEtapa = () => {

    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Agradecimento />;
    }
  }

  render () {

    return (
      <MainContainer>
        {this.proximaEtapa}

        <button onClick={this.proximaEtapa}>Próxoma Etapa</button>

      </MainContainer>
    );
  }
}

export default App;
