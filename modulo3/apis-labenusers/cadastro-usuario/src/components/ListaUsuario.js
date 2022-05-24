import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

class ListaUsuario extends React.Component {
  state = {
    cadastro: [],
    id: '',
    nome: ''
  }

  componentDidMount() {
    this.mostraLista()
  }

  mostraLista = () => {
    const urlget = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(urlget,{
        headers: {
          Authorization: 'alison-ribeiro-hopper'
        }
      }
    )
      .then((Response) => {
        this.setState({cadastro: Response.data})
      })
      .catch((error) => {
        console.log(error.Response.data)
      })
  }

  deleteUsuario = (id) => {
    const urldel = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(urldel,{
        headers: {
          Authorization: 'alison-ribeiro-hopper'
        }
      }
    )
      .then(() => {
        alert('Usuário deletado!')
        this.mostraLista()
      })
      .catch(() => {
        alert('Erro ao deletar')
      })
  }

  render() {
    return (<>
      <div>
        {
          this.state.cadastro.map((lista) => {
            return (
              <ul>
                <li>{lista.name}</li>
                <button onClick={() => this.deleteUsuario(lista.id)}>
                  Del
                </button>
              </ul>
            )
          })
        }
      </div>

    </>
    )
  }
}


export default ListaUsuario;