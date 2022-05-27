import React from "react";
import { DetalhePlay } from "./styled";
import axios from "axios";

class DetalhesPlaylist extends React.Component {
    state = {
        nome: '',
        artista: '',
        url: '',
        tracks: []
    }
       
    detalhePlaylist = (id) => {
        const urlGetTracks = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(urlGetTracks, {
            headers: {
                Authorization: 'alison-ribeiro-hopper'
            }
        })
        .then((response) => {
            this.setState({tracks: response.data.result.tracks})
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }


    render() {        
        return(
            <>

                <div>
                    <DetalhePlay onClick={() => this.detalhePlaylist(this.props.id)}>
                        Detalhe
                    </DetalhePlay>
                    <ul>
                    {this.state.tracks.map((track) => {
                        return(
                                <li key={track.id}>
                                    {track.name}-
                                    {track.artist}

                                </li>
                        )
                    })}
                    </ul>
                </div>
            </>
        )
    }
}

export default DetalhesPlaylist