import { useState } from 'react';
import './App.css'
import PokemonsList from './Components/PokemonsList';

function App() {
  let availablePokemonsList =
    [{
      id: 1,
      name: 'Bulbasaur',
      cp: 439
    },
    {
      id: 2,
      name: 'Vulpix',
      cp: 194
    },
    {
      id: 3,
      name: 'Pikachu',
      cp: 455
    },
    {
      id: 4,
      name: 'Gyarados',
      cp: 2243
    }];
  const [availablePokemons, setAvailablePokemons] = useState(availablePokemonsList);
  const [chosenPokemons, setChosenPokemons] = useState([]);

  function addToChosenPokemons(pokemon) {
    setChosenPokemons(
      [...chosenPokemons,
        pokemon]
    );
    setAvailablePokemons(
      availablePokemons.filter((ap) => ap.id !== pokemon.id)
    )
  };

  function removeFromChosenPokemons(pokemon) {
    console.log(pokemon);
  }

  return (
    <>
      <header>
        <h1>POKÉMON</h1>
      </header>
      <main>
        <h2>Choose your champions</h2>
        <section className='pokemonsListsContainer'>
          <PokemonsList pokemons={availablePokemons} title="Available Pokémons" handleClick={addToChosenPokemons} />
          <PokemonsList pokemons={chosenPokemons} title="Chosen Pokémons" handleClick={removeFromChosenPokemons} />
        </section>
      </main>
    </>
  )
}

export default App
