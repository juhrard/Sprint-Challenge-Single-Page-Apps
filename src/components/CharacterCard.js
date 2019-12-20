import React from "react";


export default function CharacterCard({ name, status, species, location, image }) {
  return (
    <>
      <div className="grid-view">
        <h1>{name}</h1>
        <img src={image} alt={`${name}`}/>
        <p>{name} is a(n) {species} who is currently {status} at {location}</p>
      </div>  
    </>
  );
}
