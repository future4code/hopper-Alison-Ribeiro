import React from "react";
import axios from "axios";
import { BotaoPadrao } from "../StylePadrao";

class AddTracks extends React.Component {
    state = {
        nomeTrack: "",
        artistaTrack: "",
        linkTrack: ""
    }

    AddNomeMusica = (event) => {
        this.setState({nomeTrack: event.target.value})
    }

    AddNomeArtista = (event) => {
        this.setState({artistaTrack: event.target.value})
    }

    AddLinkMusica = (event) => {
        this.setState({linkTrack: event.target.value})
    }

    novaTrack = (id) => {
        const urlPostTrack = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.nomeTrack,
            artist: this.state.artistaTrack,
            url: this.state.linkTrack
        }
        axios.post(urlPostTrack, body, {
            headers: {
                Authorization: "alison-ribeiro-hopper"
            }
        })
        .then(() => {
            alert(`Música ${this.state.nomeTrack} foi adicionada em sua Playlist.`)
        })
        .catch((error) => {
            alert(`Erro ao adicionar Música`)
            console.log(error.response.data)
        })
        .finally(() => {
            this.setState({nomeTrack: "", artistaTrack: "", linkTrack: ""})
        })
    }

    render() {
        return(
            <>
                <input
                    placeholder="Nome da Música"
                    value={this.state.nomeTrack}
                    onChange={this.AddNomeMusica}
                />
                <input
                    placeholder="Nome do Artista"
                    value={this.state.artistaTrack}
                    onChange={this.AddNomeArtista}
                />
                <input
                    placeholder="Link da Música"
                    value={this.state.linkTrack}
                    onChange={this.AddLinkMusica}
                />
                <BotaoPadrao onClick={() => this.novaTrack(this.props.id)}>
                    Adicionar Música
                </BotaoPadrao>
            </>
        )
    }
}

export default AddTracks