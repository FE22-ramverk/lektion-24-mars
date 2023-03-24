function PokemonCard({pokemon}) {
    console.log(pokemon);
    return (
        <article>
            <p>{pokemon.name}</p>
        </article>
    )
};
export default PokemonCard;