import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokeCard from './components/PokeCard';

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      setPokeList(response.data.results)
    })
  }, [])

  const changePokeName = event => {
    setPokeName(event.target.value)
  }

  return (
    <Corpo>
      <h1>Escolha seu Pokemon</h1>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </Corpo>
  );
}

export default App;