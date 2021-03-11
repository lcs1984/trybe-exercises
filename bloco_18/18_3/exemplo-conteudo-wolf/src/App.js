import React, { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  // componentDidMount
  // useEffect(callback, [array de dependências])
  // se eu não passar nenhum parametro para o useEffet, ele atualiza as variaves ou seja, 
  // comporta-se como um componentDidupdate
  // Se eu passar um array vazio, ele funciona como o componentDidMount
  useEffect(async () => {
    const { results } = await fetch(url).then((response) => response.json());
    setPokemons(results);
  }, [limit]);

  const handleMorePokemons = () => {
    setLimit(limit+10);
  };

  return (
    <div>
      <button type='button' onClick={handleMorePokemons}>Buscar mais Pokemons</button>
      <ul>
        {pokemons.map((item) => (
        <li key={item.name}>{item.name}</li>
         ))}
      </ul>
    </div>
  );
}

export default App;
