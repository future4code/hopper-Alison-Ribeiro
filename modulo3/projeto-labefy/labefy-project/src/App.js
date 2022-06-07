import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import api from "./config/configApi"

const Fundo = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  background-color: black;
  color: white;
`

function App() {
  const [nome, setNome] = useState ("")
  const [lista, setLista] = useState([])
  const [musicas, setMusicas] = useState([])
  const [modal, setModal] = useState(false)
  const [playId, setPlayId] = useState("")
  const [input, setInput] = useState({
    name: "",
    artist: "",
    url: ""
  })

  useEffect(() => {
    listarAllPlaylist()
  }, [lista])

  const handleInputValue = (event) => {
    setNome(event.target.value)
  }

  const inputTracks = (event) => {
    event.preventDefault()
    setInput((prev) => ({
      ...prev,
      [event.target.name] : event.target.value
    }))
  }

  const criaLista = async () => {
    const body = {
      name: nome
    }
    try{
      await api.post("/", body)
      alert ("Playlist Criada")
    }catch(error){
      if(error.response.data.message){
        return alert(error.response.data.message)
      }
    } finally {
      setNome("")
    }
  }

  const listarAllPlaylist = async () => {
    try{
      const response = await api.get("/")
      setLista(response.data.result.list)
    }catch(error){

    }
  }

  const delPlaylist = async(id) => {
    try{
      await api.delete(`/${id}`)
      alert("Playlist Deletada com sucesso!")
      listarAllPlaylist()
    }catch(error){
      console.log(error.response)
    }
  }

  const detalhePlaylist = async(id) => {
    try{
      const response = await api.get(`/${id}/tracks`)
      setMusicas(response.data.result.tracks)
    }catch(error){
      console.log(error.response)
    }
  }

  const showModal = (value) =>{
    setModal(value)
    setPlayId(playId)
    setInput({})
  }

  const addTracksPlaylist = async(id) => {
    const body = {
      name: "string", 
      artist: "string",
      url: "string"
  }
    try{
      await api.post(`/${id}/tracks`, body)
      alert("Musica Adicionada")
    }catch(error){
      console.log(error.response)
    }finally{
      setModal(false)
    }
  }

    return (
      <Fundo>
        <div>
          <h2>Criar Playlists</h2>
          <input
            placeholder="Nome da Playlist"
            value={nome}
            onChange={handleInputValue}
          />
          <button onClick={criaLista}>Adicionar</button>
        </div>
        <div>
          <h2>Minhas Playlists</h2>
          {lista.map((result) => {
            return (
              <div key={result.id}>
                <p>{result.name}</p>
                <button onClick={() => delPlaylist(result.id)}>Del</button>
                <button onClick={() => detalhePlaylist(result.id)}>Detalhes</button>
                <button onClick={() => showModal(!modal, result.id)}>Add Música</button>
              </div>
            )
          })}
          {musicas.map((result) =>{
            return (
              <div key={result.id}>
                <p>{result.name}</p>
                <p>{result.url}</p>
              </div>
            )
          })}
        </div>
          {modal && 
            <div>
              <input
                placeholder="Nome da Música"
                name="name" 
                value={input.name} 
                onChange={inputTracks}
              />
              <input placeholder="Nome do artista" name="artist" value={input.artist} onChange={inputTracks} />
              <input placeholder="URL da Música" name="url" value={input.url} onChange={inputTracks} />
              <button onClick={addTracksPlaylist(playId)}>Add Track</button>
            </div>
          
          }
      </Fundo>
    );
  }

export default App;
