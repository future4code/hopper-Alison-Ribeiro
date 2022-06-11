import React, { useState, useEffect } from 'react'
import {Cabecalho, Logo, User, ListaMatch, Foto} from "../components/Styled"
import LogoMarca from "../assets/logoastromatch.png"
import UserImg from "../assets/user.svg"
import api from '../config/configApi'

function PerfisMatchs (props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        meusMatches()
    }, [])

    const meusMatches = async () => {
        try{
            const response = await api.get("/matches")
            setMatches(response.data.matches)
        }catch(error) {
            console.log(error.response.data)
        }
    }

    return(
        <>
            <Cabecalho>
                <User src={UserImg} onClick={() => props.Voltar('inicial')}></User>
                <Logo src={LogoMarca}></Logo>
                <button onClick={props.limpar}>Limpar</button>
            </Cabecalho>
            <div>
                <ul>
                {matches.map((match) =>{
                    return (
                        <ListaMatch key={match.id}>
                            <Foto>
                                <img src={match.photo} />
                            </Foto>
                            <h4>{match.name}, {match.age}</h4>
                        </ListaMatch>
                    )
                })}
                </ul>
            </div>
        </>
    )
}

export default PerfisMatchs