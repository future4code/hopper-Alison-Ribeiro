import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

const Lista = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    width: 200px;
    button{
      background-color: black;
      color: white;
    }
`

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
                <Lista>{lista.name}
                
                  <button onClick={() => this.deleteUsuario(lista.id)}>
                    Del
                  </button>
                </Lista>
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