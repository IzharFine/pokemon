import { 
    MaxSizeScrollDiv, 
    SeconderyWrapper, 
    MarginWrapper, 
    PanelDisplay, 
    ExtraDataSectionTitle, 
    FavoritesFolder,
    SeconderyButton,
    SeconderyButtonWrapper
 } from './Pokedex.style';
import { getEvolvedFromData, getEvolveToData } from '../../helpers/pokedexHelper';
import Loader from '../loader/Loader';
import React from 'react';
import appRoutes from '../../appRoutes';

export const PokedexSeconderySide = ({extraData, pokemonName}) => {
    return (
        <SeconderyWrapper>
            <MarginWrapper>
                <PanelDisplay 
                    panelHeight={"245px"}
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