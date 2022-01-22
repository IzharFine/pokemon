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

export default ({extraData, pokemonName}) => {
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
                        <DataSection title={'Types:'}>
                            {extraData?.types.map(t => t.type.name).join(', ')}
                        </DataSection>
                        <DataSection title={'Moves:'}>
                            <MaxSizeScrollDiv>{extraData?.moves.map(t => t.move.name).join(', ')}</MaxSizeScrollDiv>
                        </DataSection>
                        <DataSection title={'Locations:'}>
                            <MaxSizeScrollDiv>{extraData?.locations?.join(', ')}</MaxSizeScrollDiv>
                        </DataSection>
                        <DataSection title={'Evolved from:'}>
                            {getEvolvedFromData(extraData?.evolveChain, pokemonName)?.join(', ')}
                        </DataSection>
                        <DataSection title={'Evolve to:'}>
                            {getEvolveToData(extraData?.evolveChain, pokemonName)?.join(', ')}
                        </DataSection>
                        <DataSection title={'Games:'}>
                            {extraData?.games.join(', ')}
                        </DataSection>
                    </React.Fragment>
                    }
                </PanelDisplay>
                <SeconderyButtonWrapper>
                    <SeconderyButton onClick={()=>{
                        window.open(appRoutes.favorites)
                    }}>
                        <FavoritesFolder />
                    </SeconderyButton>
                </SeconderyButtonWrapper>
            </MarginWrapper>
        </SeconderyWrapper>
    );
};

const DataSection = ({title, children}) => {
    return (
        <div>
            <ExtraDataSectionTitle>{title}</ExtraDataSectionTitle>
            {children}
        </div>
    );
}