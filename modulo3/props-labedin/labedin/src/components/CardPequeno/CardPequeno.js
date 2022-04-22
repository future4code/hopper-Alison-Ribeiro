import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="minicard">
            <img src={ props.imagem } className="iconemail" />
            <p><strong>{props.descri}</strong>{props.email}</p>
        </div>
    )
}

export default CardPequeno;