import React, { useState, useEffect } from 'react'
import {Cabecalho, Logo, User} from "../components/Styled"
import LogoMarca from "../assets/logoastromatch.png"
import UserImg from "../assets/user.svg"

function PerfisMatchs (props) {
    return(
        <>
            <Cabecalho>
                <User src={UserImg}></User>
                <Logo src={LogoMarca}></Logo>
                <div>
                    
                </div>
            </Cabecalho>
        </>
    )
}

export default PerfisMatchs