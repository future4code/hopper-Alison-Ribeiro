import React from "react";
import styled from "styled-components";
import face from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import whats from "../assets/whatsapp.png";

const RodaPeModelo = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: top;
    background-color: black;
    color: white;
    font-size: 12px;
`

const MapaRodape = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const TituloRodape = styled.h4`
    margin: 10px 0;
    border-bottom: 1px solid white;
    padding: 5px 0;
`

const MenuRodape = styled.a`
   margin: 10px 0;
   text-decoration: none;
   color: white;
`

const IconesRedes = styled.div`
    text-align: center;
`

const RedesRodape = styled.img`
    width: 25px;
`

const Descricao = styled.p`
    margin: 10px 0;
    text-decoration: none;
    color: white;
`

class RodaPe extends React.Component {
    render() {
        return(
            <RodaPeModelo>
                <MapaRodape>
                    <TituloRodape>
                        Mapa do Site
                    </TituloRodape>
                    <MenuRodape>
                        Inserir Playlist
                    </MenuRodape>
                    <MenuRodape>
                        Inserir Tracks
                    </MenuRodape>
                    <MenuRodape>
                        Ouvir Músicas
                    </MenuRodape>
                </MapaRodape>
        
                <MapaRodape>
                    <TituloRodape>
                        Contatos
                    </TituloRodape>
                    <Descricao>
                        Email: misicfy@musicfy.com
                    </Descricao>
                    <Descricao>
                        Contato: contato@musicfy.com
                    </Descricao>
                </MapaRodape>
                <MapaRodape>
                    <TituloRodape>
                        Redes Sociais
                    </TituloRodape>
                    <IconesRedes>
                        <a href="http://facebook.com"><RedesRodape src={face} /></a>
                        <a href="http://twitter.com"><RedesRodape src={twitter} /></a>
                        <a href="http://instagram.com"><RedesRodape src={insta} /></a>
                        <a href="http://web.whatsapp.com"><RedesRodape src={whats} /></a>
                    </IconesRedes>
        
        
                </MapaRodape>
            </RodaPeModelo>
        )
    }
}

export default RodaPe