import React from "react";
import styled from "styled-components";
import axios from "axios";
import AddPlaylist from "./components/AddPlaylist/AddPlaylist";
import MinhasPlaylist from "./components/MinhasPlaylist/MinhasPlaylist";
import RodaPe from "./pages/RodaPe";
import Cabecalho from "./pages/Cabecalho";
import { GlobalStyle } from "./GlobalStyle";
import Fundomusic from "./assets/fundomusic.jpg"
import { BotaoPadrao } from "./components/StylePadrao";
import AddTracks from "./components/AddTracks/AddTracks";

const Fundo = styled.div`
    background-image: URL(${Fundomusic}) ;
    background-repeat: repeat;
`

const Bloco = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

class App extends React.Component {
  state = {
    tela: "criaPlaylist"
  }

  mudaPagina = () => {
    if (this.state.tela === "criaPlaylist") {
      this.setState ({tela: "lista"})
    } else {
      this.setState({tela: "criaPlaylist"})
    }
  }

  render() {
    return (
      <Fundo>
        <GlobalStyle />
          <Cabecalho />
        <Bloco>
          <BotaoPadrao onClick={this.mudaPagina}>Muda Tela</BotaoPadrao>
          {this.state.tela === "criaPlaylist" ? <AddPlaylist /> : <MinhasPlaylist />}
          <AddTracks />
        </Bloco>
          <RodaPe />
      </Fundo>
    );
  }
}

export default App;
