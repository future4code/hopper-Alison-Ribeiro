import React from "react";
import axios from "axios";
import { BotaoPadrao } from "../StylePadrao";
import styled from "styled-components"

const BlocoAddPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid #D24D57;
    background-color: rgba(105, 105, 205, 0.4);
    border-radius: 5px;
    margin: 15px 0;
`

const BoxAdd = styled.input`
    margin: 10px 0;
`

const caixaAddPlaylist = styled.input`
    border-radius: 5px;
`

class AddPlaylist extends React.Component {
    state = {
        nomePlaylist: ""
    }
    
    onChangePlaylist = (event) => {
        this.setState({nomePlaylist: event.target.value})
    }

    novaPlaylist = () => {
        const urlPost = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {name: this.state.nomePlaylist}
        axios.post(urlPost, body, {
            headers: {
                Authorization: "alison-ribeiro-hopper"
            }
        })
        .then(() => {
            alert(`Playlist ${this.state.nomePlaylist} foi adicionada.`)
        })
        .catch((error) => {
            alert(`Erro ao adicionar Playlist`)
            console.log(error.response.data)
        })
        .finally(() => {
            this.setState({nomePlaylist: ""})
        })
    }


  render() {
    return (
      <BlocoAddPlaylist>
          <h3>Criar nova Playlist</h3>
          <BoxAdd
            placeholder="Nome da Playlist"
            value={this.state.nomePlaylist}
            onChange={this.onChangePlaylist}
          />
          <BotaoPadrao onClick={this.novaPlaylist}>
              Adiciona Playlist
          </BotaoPadrao>
      </BlocoAddPlaylist>
    );
  }
}

export default AddPlaylist;