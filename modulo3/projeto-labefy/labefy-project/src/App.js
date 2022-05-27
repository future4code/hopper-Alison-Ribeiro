import React from "react";
import styled from "styled-components";
import axios from "axios";
import AddPlaylist from "./components/AddPlaylist/AddPlaylist";
import MinhasPlaylist from "./components/MinhasPlaylist/MinhasPlaylist";
import RodaPe from "./pages/RodaPe";
import Cabecalho from "./pages/Cabecalho";
import { GlobalStyle } from "./GlobalStyle";

const BotaoMudaTela = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
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
      <div>
        <GlobalStyle />
        <Cabecalho />
        <BotaoMudaTela onClick={this.mudaPagina}>Muda Tela</BotaoMudaTela>
        {this.state.tela === "criaPlaylist" ? <AddPlaylist /> : <MinhasPlaylist />}
        <RodaPe />
      </div>
    );
  }
}

export default App;
