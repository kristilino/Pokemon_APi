import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {
const [pokemonList, setPokemonList] = useState([]);

{/*Same way how to use api using a function
const getPokemons = () => {
axios
     .get("https://pokeapi.co/api/v2/pokemon?limit=807")
     .then((response) => { 
      setPokemonList(response.data.results)

     })
     .catch((err)=> console.log(err));
}

useEffect(() => {
getPokemons();
}, [])
*/}


useEffect(() => {
axios
     .get("https://pokeapi.co/api/v2/pokemon?limit=807")
     .then((response) => { 
      setPokemonList(response.data.results)

     })
     .catch((err)=> console.log(err));
}, [])


  return (
    <div className="App">
     <h1>Axios Pokemon-Apis</h1>
     {/*Use the map method to iterate through each pokemon in my pokemonList  */}
<ul>
{pokemonList.map((pokemon, index) => 

(<li key={index}>{pokemon.name}</li>
))}

</ul>


    </div>
  );
}

export default App;
