import React, { useCallback } from "react";
import Loader from "../loader/Loader";
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
    SeconderyWrapper,
    Wrapper,
    PokemonWrapper,
    PokemonTitleWrapper,
    PokemonHeader,
    Favorite,
    Image,
    MaxSizeScrollDiv,
    SmallDisplayInput
 } from "./Pokedex.style";

export default ({pokemonName, img, onClickRight, onClickLeft, extraData, onSearchChanged}) => {
    const getEvolvedFromData = useCallback((evolveChain, currentPokemon) => {
        if(!evolveChain)
            return [];

        let output = [];

        for(let i = 0 ; i < evolveChain.length ; i++){
            if(evolveChain[i] === currentPokemon)
                break;
            
            output.push(evolveChain[i]);
        }

        return output;
    });

    const getEvolveToData = useCallback((evolveChain, currentPokemon) => {
        if(!evolveChain)
            return [];
            
        let output = [];
        let currentPokemonIndexInChain = evolveChain.indexOf(currentPokemon);

        for(let i = currentPokemonIndexInChain + 1 ; i < evolveChain.length ; i++){
            output.push(evolveChain[i]);
        }

        return output;
    });

    return(
    <Wrapper>
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
                                    <Favorite />
                                </PokemonTitleWrapper>
                                <Image src={img} />
                            </PokemonWrapper>
                        </PanelDisplay>
                        <MainPanelBottom>
                            <SmallLight lightColor={"red"} lightSize={"10px"}/>
                            <HamburgerIcon />
                        </MainPanelBottom>
                    </MainPanelWrapper>
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
                </MarginWrapper>
            </Content>
        </MainWrapper>
        <SeconderyWrapper>
            <MarginWrapper>
                <PanelDisplay 
                    panelHeight={"175px"}
                    style={{
                        fontSize: "12px",
                        padding: "10px",
                        display: "flex",
                        gap: "7.5px",
                        flexDirection: "column"
                    }}>
                    {!extraData ? 
                    <Loader />
                    :
                    <React.Fragment>
                        <div>
                            <u>Type:</u> {extraData?.types.map(t => t.type.name).join(', ')}
                        </div>
                        <MaxSizeScrollDiv>
                            <u>Moves:</u> {extraData?.moves.map(t => t.move.name).join(', ')}
                        </MaxSizeScrollDiv>
                        <MaxSizeScrollDiv>
                            <u>Locations:</u> {extraData?.locations?.join(', ')}
                        </MaxSizeScrollDiv>
                        <div>
                            <u>Evolved from:</u> {getEvolvedFromData(extraData?.evolveChain, pokemonName)?.join(', ')}
                        </div>
                        <div>
                            <u>Evolve to:</u> {getEvolveToData(extraData?.evolveChain, pokemonName)?.join(', ')}
                        </div>
                        <div>
                            <u>Games:</u> {extraData?.games.join(', ')}
                        </div>
                    </React.Fragment>
                    }
                </PanelDisplay>
            </MarginWrapper>
        </SeconderyWrapper>
    </Wrapper>);
};