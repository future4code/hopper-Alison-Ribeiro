import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

const FormInserir = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    
`

class AddUsuario extends React.Component {
    state = {
        nomeUsuario: "",
        emailUsuario: ""
    }

    onChangeNome = (event) => {
        this.setState({nomeUsuario: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({emailUsuario: event.target.value})
    }

    novoUsuario = () => {
        const urlpost = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nomeUsuario,
            email: this.state.emailUsuario
        }
        axios.post(urlpost, body, {
            headers: {
                Authorization: "alison-ribeiro-hopper"
            }
        })
        .then(() => {
            alert(`Usuário ${this.state.nomeUsuario} criado com sucesso`)
        })
        .catch((error) => {
            alert(`Erro ao criar Usuário`)
        })
        .finally(() => {
            this.setState({nomeUsuario:"", emailUsuario: ""})
        })
    }

    render() {
        return (<FormInserir>
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
        </FormInserir>
        )
    }
    }


export default AddUsuario;