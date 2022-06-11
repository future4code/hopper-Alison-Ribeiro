import React from "react";
import styled from "styled-components";
import axios from "axios";
import DetalhesPlaylist from "../DetalhesPlaylist/DetalhesPlaylist";
import { Delete } from "./styled";
import { BotaoPadrao } from "../StylePadrao";

class MinhasPlaylist extends React.Component {
    state = {
        listaPlaylist: [],
        id: '',
        nome: '',
        artista: '',
        url: '',
    }

    componentDidMount() {
        this.mostraLista()
    }

    mostraLista = () => {
        const urlGet = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(urlGet, {
            headers: {
                Authorization: 'alison-ribeiro-hopper'
            }
        })
        .then((response) => {
            this.setState({listaPlaylist: response.data.result.list})
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    deletePlaylist = (id) => {
        const urlDel = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete (urlDel, {
            headers: {
                Authorization: 'alison-ribeiro-hopper'
            }
        })
        .then(() => {
            alert('Playlist Deletada!')
            this.mostraLista()
        })
        .catch(() => {
            alert('Erro ao deletar')
        })
    }


    render() {
        return(
            <div>

                <ul>
                    {this.state.listaPlaylist.map((playlist) => {
                        return(
                                <li key={playlist.id}>
                                    {playlist.name}
                                    <DetalhesPlaylist id={playlist.id} />
                                    <BotaoPadrao onClick={() => this.deletePlaylist(playlist.id)}>
                                        Del
                                    </BotaoPadrao>
                                </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default MinhasPlaylist