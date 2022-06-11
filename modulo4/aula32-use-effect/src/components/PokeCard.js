import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [])

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [pokemon])

    const pegaPokemon = pokeName => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(response => {
            // guarda as infos do pokemon no estado
            setPokemon( response.data );
          })
          .catch(err => {
            console.log(err);
          });
      };

    

    return (
        <Corpo>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </Corpo>
    )
}

export default PokeCard