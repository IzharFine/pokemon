import React from "react";
import { 
    MainBlueLight,
    SmallLight,
    MainTop,
    MainWrapper,
    TopWrapper,
    Content,
    MainPanelWrapper,
    PanelTopLightsWrapper,
    PanelDisplay,
    MainPanelBottom,
    HamburgerIcon,
    MainBottomWrapper,
    MainBottomLeftButtonWrapper,
    CircleButton,
    MainBottomCenter,
    MainBottomSmallDisplay,
    LineButton,
    MainBotttomRight,
    GamepadUpDownKey,
    GamepadLeftRightWrapper,
    GamepadLeftRightKey,
    MarginWrapper,
    PokemonWrapper,
    PokemonTitleWrapper,
    PokemonHeader,
    Favorite,
    Image,
    SmallDisplayInput
 } from "./Pokedex.style";

export const PokedexMainSide = ({pokemonName, img, onClickRight, onClickLeft, onSearchChanged, onClickFavorite, isFavorite}) => {
    return (
        <MainWrapper>
            <TopWrapper>
                <MainTop>
                    <MainBlueLight />
                    <SmallLight style={{marginLeft: '7.5px'}} lightColor={"red"} lightSize={"10px"} />
                    <SmallLight style={{marginLeft: '7.5px'}} lightColor={"yellow"} lightSize={"10px"}/>
                    <SmallLight style={{marginLeft: '7.5px'}} lightColor={"green"} lightSize={"10px"}/>
                </MainTop>
            </TopWrapper>
            <Content>
                <MarginWrapper>
                    <MainPanelRender 
                        pokemonName={pokemonName}
                        img={img}
                        onClickFavorite={onClickFavorite}
                        isFavorite={isFavorite} />
                    <MainBottomRender 
                        onClickRight={onClickRight}
                        onClickLeft={onClickLeft} 
                        onSearchChanged={onSearchChanged}/>
                </MarginWrapper>
            </Content>
        </MainWrapper>
    );
};

const MainBottomRender = ({onClickRight, onClickLeft, onSearchChanged}) => {
    return (
        <MainBottomWrapper>
            <MainBottomLeftButtonWrapper>
                <CircleButton />
            </MainBottomLeftButtonWrapper>
            <MainBottomCenter>
                <LineButton bgColor={"red"} />
                <LineButton style={{marginLeft: "32px"}} bgColor={"#0d557d"} />
                <MainBottomSmallDisplay>
                    <SmallDisplayInput type="text" onChange={(ele) => onSearchChanged(ele.target.value)} />
                </MainBottomSmallDisplay>
            </MainBottomCenter>
            <MainBotttomRight>
                <GamepadUpDownKey />
                <GamepadLeftRightWrapper>
                    <GamepadLeftRightKey onClick={onClickLeft} />
                    <GamepadLeftRightKey onClick={onClickRight} />
                </GamepadLeftRightWrapper>
                <GamepadUpDownKey />
            </MainBotttomRight>
        </MainBottomWrapper>
    );
}

const MainPanelRender = ({pokemonName, onClickFavorite, isFavorite, img}) => {
    return (
    <MainPanelWrapper>
        <PanelTopLightsWrapper>
            <SmallLight lightColor={"red"} lightSize={"5px"}/>
            <SmallLight style={{marginLeft: "7.5px"}} lightColor={"red"} lightSize={"5px"}/>
        </PanelTopLightsWrapper>
        <PanelDisplay style={{textAlign: "center"}} panelHeight={"150px"}>
            <PokemonWrapper>
                <PokemonTitleWrapper>
                    <PokemonHeader>
                        {`${pokemonName.charAt(0).toUpperCase()}${pokemonName.slice(1)}`}
                    </PokemonHeader>
                    <Favorite isfavorite={isFavorite ? 1 : 0} onClick={() => onClickFavorite(pokemonName)} />
                </PokemonTitleWrapper>
                <Image src={img} />
            </PokemonWrapper>
        </PanelDisplay>
        <MainPanelBottom>
            <SmallLight lightColor={"red"} lightSize={"10px"}/>
            <HamburgerIcon />
        </MainPanelBottom>
    </MainPanelWrapper>
    );
};

export default PokedexMainSide;