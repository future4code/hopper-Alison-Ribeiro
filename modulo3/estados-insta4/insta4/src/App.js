import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Alisonluri",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      },
      {
        nomeUsuario: "Fulano",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      }
    ],
    inputUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
    
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    
    }

    const postNovo = [novoPost, ...this.state.posts]
    this.setState ({posts: postNovo})

  }

  onChangeInputUsuario = (event) => {
    this.setState({inputUsuario: event.target.value})
  }
  
  onChangeInputFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  }
  
  onChangeInputFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }

  render() {

    const listaDePost = this.state.posts.map((postObjeto) => {
      return (
        <Post key={postObjeto.nomeUsuario}
          post = {postObjeto}


          // nomeUsuario={postObjeto.nomeUsuario}
          // fotoUsuario={postObjeto.fotoUsuario}
          // fotoPost={postObjeto.fotoPost}
        />
        )
    })
    return (
      <MainContainer>
        <input
          value={this.state.inputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder="Digite seu nome"
        />
        <input
          value={this.state.inputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder="Insira o link da imagem"
        />
        <input
          value={this.state.inputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder="Insira o link da imagem"
        />
        <button onClick={this.adicionaPost}>Adicionar novo Post</button>
        {listaDePost}
        
      </MainContainer>
    )
  }    
  
}

export default App