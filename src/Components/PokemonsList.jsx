import PokemonCard from "./PokemonCard";

function PokemonsList({pokemons, title}) {
    console.log(pokemons);
    return (
        <section className="pokemonsListContainer">
            <h3>{title}</h3>
                {
                    pokemons.map((pokemon, i) => (
                        <PokemonCard key={i} pokemon={pokemon} />
                    ))
                }
        </section>
    )
};

export default PokemonsList;