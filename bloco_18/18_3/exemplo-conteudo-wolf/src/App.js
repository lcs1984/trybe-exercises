import React, { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([])
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151"
  
  // componentDidMount
  // use
  useEffect(async() => {
    const {results} = await fetch(url).then(response=>response.json());
    setPokemons(results);
  })
  return (
  <ul>
    {pokemons.map(item => <li key={item.name}>{item.name}</li>)}
  </ul>
  );
}

export default App;
