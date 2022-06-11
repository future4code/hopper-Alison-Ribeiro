import React from "react";
import styled from "styled-components";
import Logo from "../assets/musicfy.jpg";
import { BotaoPadrao } from "../components/StylePadrao";

const CabecalhoT = styled.header`
    display: flex;
    background-color: black;
    height: 75px;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`

const ImgLogo = styled.img`
    height: 60px;
    border-radius: 50px;
`

const ListaMenu = styled.div`
    display: flex;
    color: white;
`



class Cabecalho extends React.Component {
    render() {
        return(
            <CabecalhoT>
                <ImgLogo src={Logo} />
                <ListaMenu>
                    <BotaoPadrao>
                        Minhas Playlists
                    </BotaoPadrao>
                    <BotaoPadrao>
                        Criar Playlist
                    </BotaoPadrao>
                    <BotaoPadrao>
                        Deletar Playlist
                    </BotaoPadrao>
                </ListaMenu>

            </CabecalhoT>
        )
    }
}

export default Cabecalho