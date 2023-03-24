function PokemonCard({pokemon, handleClick}) {
    return (
        <article onClick={() => handleClick(pokemon)}>
            <p>{pokemon.name}</p>
        </article>
    )
};
export default PokemonCard;
