import React, { useState, useEffect } from 'react'
import {Cabecalho, Logo, User, BoxPerfil, BotaoMatch, BotaoXMatch, Rodape} from "../components/Styled"
import LogoMarca from "../assets/logoastromatch.png"
import UserImg from "../assets/user.svg"
import api from "../config/configApi";

function Matches (props) {
    const [perfil, setPerfil] = useState({
        // id: "",
        // age: 0,
        // photo: "",
        // bio: "",
        // photo_alt: "",
        // name: ""
    })
    const [match, setMatch] = useState([])
       
    useEffect(() => {
        mostraPerfil()
    }, [])
    
    const mostraPerfil = async () => {
        try{
            const response = await api.get("/person")
            setPerfil(response.data.profile)
        }catch(error){
            console.log(error.response.data)
        }
    }

    const escolhePerfil = async (choice) => {
        const body = {
            id: perfil.id,
            choice: 'true'
        }
        try {
            const response = await api.post("/choose-person", body)
            setMatch(response.data.profile)
            mostraPerfil()
        }catch(error) {
            console.log(error.response, 'erreiaqui')
        }
    }

    const discartPerfil = async () => {
        const body = {
            id: perfil.id,
            choice: 'true'
        }
        try {
            const response = await api.post("/choose-person", body)
            setMatch(response.data.profile)
            mostraPerfil()
        }catch(error) {
            console.log(error.data, 'não foiaqui')
        }
    }

    return(
        <div>
            <Cabecalho>
                <div></div>
                <Logo src={LogoMarca}></Logo>
                <User src={UserImg} onClick={() => props.MeusMatchs('matches')}></User>
            </Cabecalho>
            <div>                
                <BoxPerfil key={perfil.id}>
                    <img src={perfil.photo} alt={perfil.photo_alt} />
                    <div>
                        <h1>{perfil.name}, {perfil.age}</h1>
                        <p>{perfil.bio}</p>
                    </div>
                </BoxPerfil>
                <Rodape>
                    <BotaoXMatch onClick={discartPerfil}>X</BotaoXMatch>
                    <BotaoMatch onClick={escolhePerfil}>♥️</BotaoMatch>
                </Rodape>
            </div>
            <button onClick={props.recomecar}>Recomeçar</button>
        </div>
    )
}

export default Matches