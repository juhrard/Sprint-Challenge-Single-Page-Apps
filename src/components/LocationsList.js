import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard"
import axios from "axios";

export default function LocationsList(props) {
  const [locations, setLocations] = useState([])
  useEffect(() => {
    const getLocation = () => {
      axios
        .get('https://rickandmortyapi.com/api/location/?page=1')
        .then(response => {
          console.log("This is the server response: ", response)
          setLocations(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getLocation();
  }, []);

  console.log("location state variable", locations);

  return (
    <>
      <section className="list">
        {locations.map(location => (
          <LocationCard key={location.id} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length} />
        ))}
      </section>
    </>
  );
}
