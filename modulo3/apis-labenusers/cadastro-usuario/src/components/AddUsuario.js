import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

class AddUsuario extends React.Component {
    state = {
        nomeUsuario: "",
        emailUsuario: ""
    }

    render() {
        return (<>
            <input
                placeholder='Nome'
                value={this.state.nomeUsuario}
            />
            <input
                placeholder='E-mail'
                value={this.state.emailUsuario}
            />
            <button>Criar Usuário</button>
        </>
        )
    }
    }


export default AddUsuario;