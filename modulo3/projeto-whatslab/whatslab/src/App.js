import React from 'react';
import styled from 'styled-components'

import './App.css';

const MainContainer = styled.div`
display: flex;
justify-content: center;
`
const BoxApp = styled.div`
display: flex;
flex-direction: column;
border: 1px solid grey;
width: 70vw;
height: 100vh;
`
const BoxMensagem = styled.div`
padding: 15px;
display: flex;
flex-direction: column-reverse;
height: 100%;

`
const BoxEnviarMensagem = styled.div`
display: flex;
align-items: flex-end;
`

class App extends React.Component {
  state = {
    appMensagem: [
      {
        usuario: "",
        mensagem: ""
      },
      {
        usuarioOn: "",
        mensagemEnviada: ""
      }
    ]
  }

  adicionaMensagem = () => {    
    const novaMsg = {
      usuario: this.state.usuarioOn,
      mensagem: this.state.mensagemEnviada
    }

    const novaMsgm = [novaMsg, ...this.state.appMensagem]
    this.setState({appMensagem: novaMsgm})
  }

  onChangeNovoUsuario = (event) => {
    this.setState({ usuarioOn: event.target.value })
  }
  
  onChangeNovaMsg = (event) => {
    this.setState({ mensagemEnviada: event.target.value })
  }

  render() {

    const msgAtual = this.state.appMensagem.map((msg) => {
      return (
        <p>
        <strong>{msg.usuario}</strong>{msg.mensagem}
      </p>
      )
    }
    )
    return (
      <MainContainer>
        <BoxApp>
          <BoxMensagem>
            {msgAtual}
          </BoxMensagem>
          <BoxEnviarMensagem>
            <input
              placeholder='Usuário'
              onChange={this.onChangeNovoUsuario}
              value={this.state.onChangeNovoUsuario}
            />
            <input
              placeholder='Mensagem'
              onChange={this.onChangeNovaMsg}
              value={this.state.onChangeNovaMsg}
            />
            <button onClick={this.adicionaMensagem}>Enviar</button>
          </BoxEnviarMensagem>
        </BoxApp>
      </MainContainer>

    )
  }  
}

export default App;
