import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import AddUsuario from './components/AddUsuario';
import ListaUsuario from './components/ListaUsuario';

class App extends React.Component {
  state = {
    tela: true
  }

  mudaPagina = () => {
    if (this.state.tela === true) {
      this.setState ({tela: false})
    } else {
      this.setState ({tela: true})
    }
  }
    render() {
      return (<>
        <button onClick={this.mudaPagina}>Troca de tela</button>
        {this.state.tela === true?<AddUsuario />:<ListaUsuario />}
      </>
      )
    }
}

export default App;
