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

    let dataSectionsModel = [
        {
            title: 'Types:',
            text: extraData?.types.map(t => t.type.name).join(', ')
        },
        {
            title: 'Moves:',
            text: extraData?.moves.map(t => t.move.name).join(', ')
        },
        {
            title: 'Locations:',
            text: extraData?.locations?.join(', ')
        },
        {
            title: 'Evolved from:',
            text: getEvolvedFromData(extraData?.evolveChain, pokemonName)?.join(', ')
        },
        {
            title: 'Evolved to:',
            text: getEvolveToData(extraData?.evolveChain, pokemonName)?.join(', ')
        },
        {
            title: 'Games:',
            text: extraData?.games.join(', ')
        }
    ];

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
                    <DataSectionsGenerator titleTextArray={dataSectionsModel} />
                    }
                </PanelDisplay>
                <SeconderyButtonWrapper>
                    <SeconderyButton onClick={()=>{
                        if(window.location.pathname !== appRoutes.favorites)
                            window.open(appRoutes.favorites)
                        }}>
                        <FavoritesFolder />
                    </SeconderyButton>
                    <SeconderyGreyButton style={{marginLeft: "auto"}}>
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

const DataSectionsGenerator = ({titleTextArray}) => {
    return titleTextArray.map(({title, text}, index) => <DataSection key={index} title={title} text={text} />);
};

const DataSection = ({title, text}) => {
    return (
        <div>
            <ExtraDataSectionTitle>{title}</ExtraDataSectionTitle>
            <MaxSizeScrollDiv>{text}</MaxSizeScrollDiv>
        </div>
    );
};

export default PokedexSeconderySide;