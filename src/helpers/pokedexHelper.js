import {
  FAVORITE_POKEMONS_LOCALSTORAGE_KEY,
  MAX_ALLOWED_FAVORITES,
} from "../utils/consts";

export const getEvolvedFromData = (evolveChain, currentPokemon) => {
  if (!evolveChain) return [];

  let output = [];

  for (let i = 0; i < evolveChain.length; i++) {
    if (evolveChain[i] === currentPokemon) break;

    output.push(evolveChain[i]);
  }

  return output;
};

export const getEvolveToData = (evolveChain, currentPokemon) => {
  if (!evolveChain) return [];

  let output = [];
  let currentPokemonIndexInChain = evolveChain.indexOf(currentPokemon);

  for (let i = currentPokemonIndexInChain + 1; i < evolveChain.length; i++) {
    output.push(evolveChain[i]);
  }

  return output;
};

export const hanldePokedexOnRightClick = (
  currentPokemonIndex,
  setCurrentPokemonIndex,
  pokemonsCount
) => {
  let nextIndex = currentPokemonIndex + 1;
  setCurrentPokemonIndex(nextIndex === pokemonsCount ? 0 : nextIndex);
};

export const hanldePokedexOnLeftClick = (
  currentPokemonIndex,
  setCurrentPokemonIndex,
  pokemonsCount
) => {
  let nextIndex = currentPokemonIndex - 1;
  setCurrentPokemonIndex(nextIndex === -1 ? pokemonsCount - 1 : nextIndex);
};

export const handlePokedexSearchChanged = (
  pokemonName,
  setCurrentPokemonIndex,
  pokemonExtraDetails
) => {
  let choosenPokemon = pokemonExtraDetails[pokemonName.toLocaleLowerCase()];
  if (choosenPokemon) setCurrentPokemonIndex(choosenPokemon.index);
};

export const handleOnClickFavorite = (
  pokemonName,
  pokemonExtraDetails,
  pokemonsBaseData
) => {
  let localStorageFavoritePokemons = localStorage.getItem(
    FAVORITE_POKEMONS_LOCALSTORAGE_KEY
  );

  if (localStorageFavoritePokemons)
    localStorageFavoritePokemons = JSON.parse(localStorageFavoritePokemons);
  else localStorageFavoritePokemons = {};

  if (localStorageFavoritePokemons[pokemonName]) {
    delete localStorageFavoritePokemons[pokemonName];
    return localStorageFavoritePokemons;
  }

  if (
    Object.keys(localStorageFavoritePokemons).length === MAX_ALLOWED_FAVORITES
  )
    return localStorageFavoritePokemons;

  let choosenPokemonExtraDetails =
    pokemonExtraDetails[pokemonName.toLocaleLowerCase()];

  localStorageFavoritePokemons[pokemonName] = {
    extraDetails: { ...choosenPokemonExtraDetails },
    baseData: { ...pokemonsBaseData[choosenPokemonExtraDetails.index] },
  };

  return localStorageFavoritePokemons;
};
