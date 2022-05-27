import React from "react";
import styled from "styled-components";
import Logo from "../assets/musicfy.jpg";

const CabecalhoT = styled.header`
    display: flex;
    background-color: black;
    height: 75px;
    justify-content: center;
`

const ImgLogo = styled.img`
    height: 60px;
    border-radius: 50px;
`

class Cabecalho extends React.Component {
    render() {
        return(
            <CabecalhoT>
                <ImgLogo src={Logo} />
            </CabecalhoT>
        )
    }
}

export default Cabecalho