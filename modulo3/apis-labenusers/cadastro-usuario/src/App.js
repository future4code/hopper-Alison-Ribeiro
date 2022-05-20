import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import AddUsuario from './components/AddUsuario';
import ListaUsuario from './components/ListaUsuario';

class App extends React.Component {
  state = {
    tela: true
  }

    render() {
      return (<>
        <button>Troca de tela</button>
        <AddUsuario/>
        <ListaUsuario/>
      </>
      )
    }
}


export default App;
