import React, { useState } from "react";
import { getPokemons, getPokemonExtraData } from '../../services/homeService';
import Loader from "../../components/loader/Loader";
import { pokemonExtraDataToCardAdapter } from '../../adapters/pokemonDataAdapter';
import Pokedex from "../../components/pokedex/Pokedex";
import { debounce } from '../../utils/utils';
import { FAVORITE_POKEMONS_LOCALSTORAGE_KEY, APPLICATION_MAX_POKEMONS } from '../../utils/consts';
import { 
    handlePokedexSearchChanged, 
    hanldePokedexOnRightClick, 
    hanldePokedexOnLeftClick,
    handleOnClickFavorite } from "../../helpers/pokedexHelper";

export default () => {
    const [pokemonsBaseData, setPokemonsBaseData] = useState(null);
    const [pokemonExtraDetails, setPokemonExtraDetails] = useState({});
    const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
    const [favoritePokemons, setFavoritePokemons] = useState(JSON.parse(localStorage.getItem(FAVORITE_POKEMONS_LOCALSTORAGE_KEY)));

    useState(async ()=>{
        let pokemonsBaseDataArr = [];
        let pokemonsExtraDataDic = {};

        if(!favoritePokemons)
            return;

        Object.keys(favoritePokemons).forEach((pokemonName, index) => {
            let currentPokemonName = favoritePokemons[pokemonName];
            pokemonsBaseDataArr.push(currentPokemonName.baseData);
            currentPokemonName.extraDetails.index = index;
            pokemonsExtraDataDic[pokemonName] = currentPokemonName.extraDetails;
        });

        setPokemonsBaseData(pokemonsBaseDataArr);
        setPokemonExtraDetails(pokemonsExtraDataDic);
    }, []);

    return(
    pokemonsBaseData === null || pokemonsBaseData === null || pokemonsBaseData.length === 0 ? 
    <div>
        NO FAVORITES POKEMONS 
    </div>
    :
    <Pokedex
        onClickFavorite={(pokemonName) => {
            let favoritesPokemonsToUpdate = handleOnClickFavorite(pokemonName, pokemonExtraDetails, pokemonsBaseData);
            localStorage.setItem(FAVORITE_POKEMONS_LOCALSTORAGE_KEY, JSON.stringify(favoritesPokemonsToUpdate));
            setFavoritePokemons(favoritesPokemonsToUpdate);
        }}
        extraData={pokemonExtraDetails[pokemonsBaseData[currentPokemonIndex].name]}
        isFavorite={favoritePokemons && favoritePokemons[pokemonsBaseData[currentPokemonIndex].name] !== undefined}
        pokemonName={pokemonsBaseData[currentPokemonIndex].name} 
        img={pokemonsBaseData[currentPokemonIndex].sprites.front_default}
        onClickRight={() => hanldePokedexOnRightClick(currentPokemonIndex, setCurrentPokemonIndex, pokemonsBaseData.length)}
        onClickLeft={() => hanldePokedexOnLeftClick(currentPokemonIndex, setCurrentPokemonIndex, pokemonsBaseData.length)}
        onSearchChanged={(pokemonName) => debounce(() => { handlePokedexSearchChanged(pokemonName, setCurrentPokemonIndex, pokemonExtraDetails) }, 250)}>
    </Pokedex>
    );
};