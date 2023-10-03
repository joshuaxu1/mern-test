import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Pokemon() {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:8000/api")
        .then((response) => {
          console.log(response.data.results);
          setPokeApiData(response.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
    return (
        <div className="App">
        <h1>Axios Pokemon API Assignment</h1>
        <ul>
          {pokeApiData.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
        
    )
          }
export default Pokemon;