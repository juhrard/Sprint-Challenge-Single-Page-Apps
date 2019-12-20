import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

const StyledSection = styled.section`

display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: space-evenly;

`

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  console.log('props in searchform', props)

  useEffect((event) => {
    const 
      // results = { 
      //   loc: props.locations.filter(item =>
      //     item.name.toLowerCase().includes(searchTerm.toLowerCase())),
      //   // char: props.characters.filter(item => 
      //   //   item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      // }
      results = props.items.filter(item =>item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    console.log('results', results)

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <section className="search-form">
      <input 
        type="text" 
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <StyledSection>
        {searchResults.map(item => (
          <CharacterCard key={item.id} name={item.name} status={item.status} species={item.species} location={item.location.name} image={item.image} />
        ))}
      </StyledSection>
    </section>
  )
}
