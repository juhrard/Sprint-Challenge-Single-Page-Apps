import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm"
import axios from "axios";
import styled from 'styled-components';

const StyledSection = styled.section`

display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: space-evenly;

`

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
    useEffect(() => {
      const getCharacters = () => {
        axios
          .get('https://rickandmortyapi.com/api/character/?page=1')
          .then(response => {
            console.log("This is the server response: ", response)
            setCharacters(response.data.results);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getCharacters();
    }, []);
  
    console.log("characters state variable", characters);
  
    return (
      <>
        <SearchForm items={characters}/>
        <StyledSection>
          {characters.map(character => (
            <CharacterCard key={character.id} name={character.name} status={character.status} species={character.species} location={character.location.name} image={character.image} />
          ))}
        </StyledSection>
      </>
    );
}
