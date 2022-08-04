import React from "react";
import axios from "axios";
import { BotaoPadrao } from "../StylePadrao";
import styled from "styled-components";

const AddTracksBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid #D24D57;
    background-color: rgba(105, 105, 205, 0.4);
    border-radius: 5px;
    margin: 15px 0;
    padding: 15px 0;
`

const BoxAdd = styled.input`
    margin: 10px 0;
`

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
            <AddTracksBox>
                <BoxAdd
                    placeholder="Nome da Música"
                    value={this.state.nomeTrack}
                    onChange={this.AddNomeMusica}
                />
                <BoxAdd
                    placeholder="Nome do Artista"
                    value={this.state.artistaTrack}
                    onChange={this.AddNomeArtista}
                />
                <BoxAdd
                    placeholder="Link da Música"
                    value={this.state.linkTrack}
                    onChange={this.AddLinkMusica}
                />
                <BotaoPadrao onClick={() => this.novaTrack(this.props.id)}>
                    Adicionar Música
                </BotaoPadrao>
            </AddTracksBox>
        )
    }
}

export default AddTracks