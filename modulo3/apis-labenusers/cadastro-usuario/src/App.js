import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import AddUsuario from './components/AddUsuario';
import ListaUsuario from './components/ListaUsuario';

const FormInserir = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 250px;
    height: 150px;
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
      return (<>
        <button onClick={this.mudaPagina}>Troca de tela</button>
      <FormInserir>
        {this.state.tela === "cadastro"?<AddUsuario />:<ListaUsuario />}
      </FormInserir>     
      </>      
      )
    }
}

export default App;
