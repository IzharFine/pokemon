import React from "react";
import PokedexSeconderySide from "./PokedexSeconderySide";
import PokedexMainSide from "./PokedexMainSide";
import { Wrapper } from "./Pokedex.style";

export const Pokedex = ({
  pokemonName,
  img,
  onClickRight,
  onClickLeft,
  extraData,
  onSearchChanged,
  onClickFavorite,
  isFavorite,
}) => {
  return (
    <Wrapper>
      <PokedexMainSide
        pokemonName={pokemonName}
        img={img}
        onClickRight={onClickRight}
        onClickLeft={onClickLeft}
        onSearchChanged={onSearchChanged}
        onClickFavorite={onClickFavorite}
        isFavorite={isFavorite}
      />
      <PokedexSeconderySide pokemonName={pokemonName} extraData={extraData} />
    </Wrapper>
  );
};

export default Pokedex;
