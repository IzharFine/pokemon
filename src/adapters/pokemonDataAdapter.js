export const pokemonExtraDataToCardAdapter = ({
    pokemonBaseData,
    pokemonEvolutions,
    pokemonLocations,
    pokemonGames
}) => {
    let pokemonCardsModel = {};

    handlePokemonBaseData(pokemonBaseData, pokemonCardsModel);
    handlePokemonEvolutions(pokemonEvolutions, pokemonCardsModel);
    handlePokemonLocations(pokemonLocations, pokemonCardsModel);
    handlePokemonGames(pokemonGames, pokemonCardsModel);

    return pokemonCardsModel;
};

const handlePokemonGames = (pokemonGames, pokemonCardsModel) => {
    pokemonGames.forEach((pokemonGame) => {
        pokemonGame.pokemon_species.forEach(({name}) => {
            let currentValue = pokemonCardsModel[name];

            if(currentValue){
                currentValue.games = currentValue.games || [];
                currentValue.games.push(pokemonGame.name);
            }
        });
    });
};

const handlePokemonLocations = (pokemonLocations, pokemonCardsModel) => {
    pokemonLocations.forEach(({pokemon_encounters, name}) => {
        pokemon_encounters.forEach(({pokemon}) => {
            let currentValue = pokemonCardsModel[pokemon.name];

            if(currentValue){
                currentValue.locations = currentValue.locations || [];
                currentValue.locations.push(name);
            }
        });
    });
};

const handlePokemonEvolutions = (pokemonEvolutions, pokemonCardsModel) => {
    pokemonEvolutions.forEach(({chain}) => {
        handleEvolvesTo(chain, pokemonCardsModel);
    });
};

const handlePokemonBaseData = (pokemonBaseData, pokemonCardsModel) => {
    pokemonBaseData.forEach((pokemonData, index) => {
        pokemonCardsModel[pokemonData.forms[0].name] = {
            id: pokemonData.id,
            types: pokemonData.types,
            moves: pokemonData.moves,
            index: index,
            name: pokemonData.forms[0].name,
            img: pokemonData.sprites.front_default
        };
    });
};

export const handleEvolvesTo = (chain, pokemonCardsModel) => {
    if(!pokemonCardsModel[chain.species.name])
        return;

    let evolveChain = [];

    while(chain){
        evolveChain.push(chain.species.name);
        chain = chain.evolves_to[0];
    };
    
    evolveChain.forEach(p => {
        if(pokemonCardsModel[p])
            pokemonCardsModel[p].evolveChain = evolveChain;
    });
};