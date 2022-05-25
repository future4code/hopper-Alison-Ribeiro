import React from "react";
import styled from "styled-components";
import axios from "axios";
import AddPlaylist from "./components/AddPlaylist";
import MinhasPlaylist from "./components/MinhasPlaylist";


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
        <button onClick={this.mudaPagina}>Muda Tela</button>
        {this.state.tela === "criaPlaylist" ? <AddPlaylist /> : <MinhasPlaylist />}
      </div>
    );
  }
}

export default App;
