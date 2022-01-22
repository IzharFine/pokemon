import React, { useState, useEffect } from "react";
import { getPokemons, getPokemonExtraData } from "../../services/homeService";
import Loader from "../../components/loader/Loader";
import { pokemonExtraDataToCardAdapter } from "../../adapters/pokemonDataAdapter";
import Pokedex from "../../components/pokedex/Pokedex";
import { debounce } from "../../utils/utils";
import {
  FAVORITE_POKEMONS_LOCALSTORAGE_KEY,
  APPLICATION_MAX_POKEMONS,
} from "../../utils/consts";
import {
  handlePokedexSearchChanged,
  hanldePokedexOnRightClick,
  hanldePokedexOnLeftClick,
  handleOnClickFavorite,
} from "../../helpers/pokedexHelper";

export const Home = () => {
  const [pokemonsBaseData, setPokemonsBaseData] = useState(null);
  const [pokemonExtraDetails, setPokemonExtraDetails] = useState({});
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const [favoritePokemons, setFavoritePokemons] = useState(
    JSON.parse(localStorage.getItem(FAVORITE_POKEMONS_LOCALSTORAGE_KEY))
  );

  useEffect(async () => {
    let pokemonBaseData = await getPokemons(1, APPLICATION_MAX_POKEMONS);
    setPokemonsBaseData(pokemonBaseData);

    let pokemonExtraData = await getPokemonExtraData();
    let adapterModel = {
      pokemonBaseData,
      pokemonEvolutions: pokemonExtraData[0],
      pokemonGames: pokemonExtraData[1],
      pokemonLocations: pokemonExtraData[2],
    };

    setPokemonExtraDetails(pokemonExtraDataToCardAdapter(adapterModel));
  }, []);

  return pokemonsBaseData === null ? (
    <Loader />
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
        pokemonExtraDetails[pokemonsBaseData[currentPokemonIndex].forms[0].name]
      }
      isFavorite={
        favoritePokemons &&
        favoritePokemons[
          pokemonsBaseData[currentPokemonIndex].forms[0].name
        ] !== undefined
      }
      pokemonName={pokemonsBaseData[currentPokemonIndex].forms[0].name}
      img={pokemonsBaseData[currentPokemonIndex].sprites.front_default}
      onClickRight={() =>
        hanldePokedexOnRightClick(
          currentPokemonIndex,
          setCurrentPokemonIndex,
          APPLICATION_MAX_POKEMONS
        )
      }
      onClickLeft={() =>
        hanldePokedexOnLeftClick(
          currentPokemonIndex,
          setCurrentPokemonIndex,
          APPLICATION_MAX_POKEMONS
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

export default Home;
