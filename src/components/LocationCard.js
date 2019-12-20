import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  console.log(name, type, dimension, residents)
  return (
    <div className="grid-view">
      <h1>{name}</h1>
      <h5>{type}</h5>
      <h5>{dimension}</h5>
      <h5>{residents}</h5>
    </div>
  
  );
}
