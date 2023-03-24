import PokemonCard from "./PokemonCard";

function PokemonsList({ pokemons, title, handleClick }) {

    function calcCP() {
        let totalCP = 0;
        pokemons.forEach(p => {
            totalCP += p.cp
        });
        return totalCP;
    }

    return (
        <section className="pokemonsListContainer">
            <h3>{title}</h3>
            {
                pokemons.map((pokemon, i) => (
                    <PokemonCard key={i} pokemon={pokemon} handleClick={handleClick} />
                ))
            }
            <p>{calcCP()}CP</p>
        </section>
    )
};

export default PokemonsList;
