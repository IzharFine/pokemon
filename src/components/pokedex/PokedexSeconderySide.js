import { 
    MaxSizeScrollDiv, 
    SeconderyWrapper, 
    MarginWrapper, 
    PanelDisplay, 
    ExtraDataSectionTitle, 
    FavoritesFolder,
    SeconderyButton,
    SeconderyButtonWrapper,
    SeconderyGreyButton,
    Play,
    Pause
 } from './Pokedex.style';
import { useState } from 'react';
import { getEvolvedFromData, getEvolveToData } from '../../helpers/pokedexHelper';
import Loader from '../loader/Loader';
import React from 'react';
import appRoutes from '../../appRoutes';
import pokemonThemePath from '../../assests/sounds/pokemontheme.mp3';

export const PokedexSeconderySide = ({extraData, pokemonName}) => {
    const [pokemonTheme] = useState(new Audio(pokemonThemePath));

    return (
        <SeconderyWrapper>
            <MarginWrapper>
                <PanelDisplay panelHeight={"245px"}
                    style={{
                        fontSize: "12px",
                        padding: "10px",
                        display: "flex",
                        gap: "5.5px",
                        flexDirection: "column",
                    }}>
                    {!extraData ? 
                    <Loader />
                    :
                    <React.Fragment>
                        <DataSection 
                            title={'Types:'} 
                            text={extraData?.types.map(t => t.type.name).join(', ')} />
                        <DataSection 
                            title={'Moves:'} 
                            text={extraData?.moves.map(t => t.move.name).join(', ')} />
                        <DataSection 
                            title={'Locations:'} 
                            text={extraData?.locations?.join(', ')} />
                        <DataSection 
                            title={'Evolved from:'} 
                            text={getEvolvedFromData(extraData?.evolveChain, pokemonName)?.join(', ')} />
                        <DataSection 
                            title={'Evolved to:'} 
                            text={getEvolveToData(extraData?.evolveChain, pokemonName)?.join(', ')} />
                        <DataSection 
                            title={'Games:'} 
                            text={extraData?.games.join(', ')} />
                    </React.Fragment>
                    }
                </PanelDisplay>
                <SeconderyButtonWrapper>
                    <SeconderyButton onClick={()=>{
                        if(window.location.pathname !== appRoutes.favorites)
                            window.open(appRoutes.favorites)
                        }}>
                        <FavoritesFolder />
                    </SeconderyButton>
                    <SeconderyGreyButton isplay={pokemonTheme.paused ? 0 : 1} style={{marginLeft: "auto"}}>
                        <Play onClick={()=>{pokemonTheme.play();}}/>
                    </SeconderyGreyButton>
                    <SeconderyGreyButton>
                        <Pause onClick={()=>{pokemonTheme.pause();}}/>
                    </SeconderyGreyButton>
                </SeconderyButtonWrapper>
            </MarginWrapper>
        </SeconderyWrapper>
    );
};

const DataSection = ({title, text}) => {
    return (
        <div>
            <ExtraDataSectionTitle>{title}</ExtraDataSectionTitle>
            <MaxSizeScrollDiv>{text}</MaxSizeScrollDiv>
        </div>
    );
}

export default PokedexSeconderySide;