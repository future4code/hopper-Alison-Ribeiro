import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import AddUsuario from './components/AddUsuario';
import ListaUsuario from './components/ListaUsuario';

const FormInserir = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid gray;
    width: 350px;
    height: 40vh;
    align-items: center;
    margin: auto auto;
`

class App extends React.Component {
  state = {
    tela: "cadastro"
  }

  mudaPagina = () => {
    if (this.state.tela === "cadastro") {
      this.setState ({tela: "lista"})
    } else {
      this.setState ({tela: "cadastro"})
    }
  }
    render() {
      return (<FormInserir>
        <button onClick={this.mudaPagina}>Troca de tela</button>
        {this.state.tela === "cadastro"?<AddUsuario />:<ListaUsuario />}
      </FormInserir>
      )
    }
}

export default App;
