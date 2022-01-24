import React, { useEffect, useState } from "react";
import Pokedex from "../../components/pokedex/Pokedex";
import { debounce } from "../../utils/utils";
import { FAVORITE_POKEMONS_LOCALSTORAGE_KEY } from "../../utils/consts";
import {
  handlePokedexSearchChanged,
  hanldePokedexOnRightClick,
  hanldePokedexOnLeftClick,
  handleOnClickFavorite,
} from "../../helpers/pokedexHelper";

export const Favorites = () => {
  const [pokemonsBaseData, setPokemonsBaseData] = useState(null);
  const [pokemonExtraDetails, setPokemonExtraDetails] = useState({});
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const [favoritePokemons, setFavoritePokemons] = useState(
    JSON.parse(localStorage.getItem(FAVORITE_POKEMONS_LOCALSTORAGE_KEY))
  );

  useEffect(() => {
    let pokemonsBaseDataArr = [];
    let pokemonsExtraDataDic = {};

    if (!favoritePokemons) return;

    Object.keys(favoritePokemons).forEach((pokemonName, index) => {
      let currentPokemonData = favoritePokemons[pokemonName];
      pokemonsBaseDataArr.push(currentPokemonData.baseData);
      currentPokemonData.extraDetails.index = index;
      pokemonsExtraDataDic[pokemonName] = currentPokemonData.extraDetails;
    });

    setCurrentPokemonIndex(0);
    setPokemonsBaseData(pokemonsBaseDataArr);
    setPokemonExtraDetails(pokemonsExtraDataDic);
  }, [favoritePokemons]);

  return pokemonsBaseData === null ||
    pokemonsBaseData === null ||
    pokemonsBaseData.length === 0 ? (
    <div>NO FAVORITE POKEMONS</div>
  ) : (
    <Pokedex
      onClickFavorite={(pokemonName) => {
        let favoritesPokemonsToUpdate = handleOnClickFavorite(
          pokemonName,
          pokemonExtraDetails,
          pokemonsBaseData
        );
        localStorage.setItem(
          FAVORITE_POKEMONS_LOCALSTORAGE_KEY,
          JSON.stringify(favoritesPokemonsToUpdate)
        );
        setFavoritePokemons(favoritesPokemonsToUpdate);
      }}
      extraData={
        pokemonExtraDetails[pokemonsBaseData[currentPokemonIndex].name]
      }
      isFavorite={
        favoritePokemons &&
        favoritePokemons[pokemonsBaseData[currentPokemonIndex].name] !==
          undefined
      }
      pokemonName={pokemonsBaseData[currentPokemonIndex].name}
      img={pokemonsBaseData[currentPokemonIndex].sprites.front_default}
      onClickRight={() =>
        hanldePokedexOnRightClick(
          currentPokemonIndex,
          setCurrentPokemonIndex,
          pokemonsBaseData.length
        )
      }
      onClickLeft={() =>
        hanldePokedexOnLeftClick(
          currentPokemonIndex,
          setCurrentPokemonIndex,
          pokemonsBaseData.length
        )
      }
      onSearchChanged={(pokemonName) =>
        debounce(() => {
          handlePokedexSearchChanged(
            pokemonName,
            setCurrentPokemonIndex,
            pokemonExtraDetails
          );
        }, 250)
      }
    ></Pokedex>
  );
};

export default Favorites;
