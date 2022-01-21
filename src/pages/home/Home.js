import React, { useCallback, useState } from "react";
import { getPokemons, getPokemonExtraData } from './HomeService';
import Loader from "../../components/loader/Loader";
import { pokemonExtraDataToCardAdapter } from '../../adapters/pokemonDataAdapter';
import Pokedex from "../../components/pokedex/Pokedex";

const POKEMONS_COUNT = 151;

export default () => {
    const [pokemonsBaseData, setPokemonsBaseData] = useState(null);
    const [pokemonExtraDetails, setPokemonExtraDetails] = useState({});
    const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

    useState(async ()=>{
        let pokemonBaseData = await getPokemons(1, POKEMONS_COUNT);
        setPokemonsBaseData(pokemonBaseData);
        
        let pokemonExtraData = await getPokemonExtraData();
        let adapterModel = {
            pokemonBaseData,
            pokemonEvolutions: pokemonExtraData[0],
            pokemonGames: pokemonExtraData[1],
            pokemonLocations: pokemonExtraData[2]
        };
        
        setPokemonExtraDetails(pokemonExtraDataToCardAdapter(adapterModel));
    }, []);

    const hanldePokedexOnRightClick = () => {
        let nextIndex = currentPokemonIndex + 1;
        setCurrentPokemonIndex(nextIndex === POKEMONS_COUNT ? 0 : nextIndex);
    };

    const hanldePokedexOnLeftClick = () => {
        let nextIndex = currentPokemonIndex - 1;
        setCurrentPokemonIndex(nextIndex === -1 ? POKEMONS_COUNT - 1 : nextIndex);
    };

    const handlePokedexSearchChanged = (pokemonName) => {
        let choosenPokemon = pokemonExtraDetails[pokemonName.toLocaleLowerCase()];
        if(choosenPokemon)
            setCurrentPokemonIndex(choosenPokemon.id - 1);
    };
    
    return(
    pokemonsBaseData === null ? 
    <Loader />
    :
    <Pokedex
        extraData={
            pokemonExtraDetails[pokemonsBaseData[currentPokemonIndex].forms[0].name]
        }
        pokemonName={pokemonsBaseData[currentPokemonIndex].forms[0].name} 
        img={pokemonsBaseData[currentPokemonIndex].sprites.front_default}
        onClickRight={hanldePokedexOnRightClick}
        onClickLeft={hanldePokedexOnLeftClick}
        onSearchChanged={(pokemonName) => debounce(() => { handlePokedexSearchChanged(pokemonName) }, 250)}>
    </Pokedex>
    );
};

const debounce = (() => {
    let timer;
    return (callback, ms) => {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();