import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

class AddUsuario extends React.Component {
    state = {
        nomeUsuario: "",
        emailUsuario: ""
    }

    onChangeNome = (event) => {
        const novoNome = event.target.value
        this.setState({nomeUsuario: novoNome})
    }

    onChangeEmail = (event) => {
        const novoEmail = event.target.value
        this.setState({emailUsuario: novoEmail})
    }

    novoUsuario = () => {
        const body = {
            name: this.state.nomeUsuario,
            email: this.state.emailUsuario
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, body, {
            headers: {
                Authorization: "alison-ribeiro-hopper"
            }
        })
        .then(() => {
            alert(`Usuário ${this.state.nomeUsuario} criado com sucesso`)
            this.setState({nomeUsuario:"", emailUsuario: ""})
        })
        .catch((error) => {
            alert(`Erro ao criar Usuário`)
        })
    }

    render() {
        return (<>
            <input
                placeholder='Nome'
                value={this.state.nomeUsuario}
                onChange={this.onChangeNome}
            />
            <input
                placeholder='E-mail'
                value={this.state.emailUsuario}
                onChange={this.onChangeEmail}
            />
            <button onClick={this.novoUsuario}>Criar Usuário</button>
        </>
        )
    }
    }


export default AddUsuario;