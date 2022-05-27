import React from "react";
import { BotaoAddPlay } from "./styled";
import axios from "axios";

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
      <div>
          <input
            placeholder="Nome da Playlist"
            value={this.state.nomePlaylist}
            onChange={this.onChangePlaylist}
          />
          <BotaoAddPlay onClick={this.novaPlaylist}>
              Adiciona Playlist
          </BotaoAddPlay>
      </div>
    );
  }
}

export default AddPlaylist;