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

    useEffect(() => {
        mostraPerfil()
    }, [])
    
    const mostraPerfil = async () => {
        try{
            const response = await api.get("/person")
            console.log(response.data.profile)
            setPerfil(response.data.profile)
        }catch(error){
            console.log(error.response.data)
        }
    }

    return(
        <div>
            <Cabecalho>
                <div></div>
                <Logo src={LogoMarca}></Logo>
                <User src={UserImg} ></User>
            </Cabecalho>
            <div>                
                {/* {perfil.map((result) => { */}
                    {/* return ( */}
                        <BoxPerfil key={perfil.id}>
                            <img src={perfil.photo} alt={perfil.photo_alt} />
                            <div>
                                <h1>{perfil.name}, {perfil.age}</h1>
                                <p>{perfil.bio}</p>
                            </div>
                        </BoxPerfil>
                    {/* ) */}
                {/* })} */}
                
                <Rodape>
                    <BotaoXMatch>X</BotaoXMatch>
                    <BotaoMatch>♥️</BotaoMatch>
                </Rodape>
            </div>
        </div>
    )
}

export default Matches