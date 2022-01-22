import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export const Pause = styled(PauseIcon)`

`;

export const Play = styled(PlayArrowIcon)`

`;

export const SeconderyButtonWrapper = styled.div`
    margin-top: 8px;
    display: flex;
`;

export const SeconderyGreyButton = styled.div`
    padding: 0px 10px;
    border-radius: 3px;
    align-items: center;
    display: flex;
    height: 30px;
    background-color: ${props => props.isplaying === 1 ? props.theme.colors.grey_3 : props.theme.colors.grey_2};
    cursor: pointer;
    transition: .15s linear all;
    box-shadow: ${props => props.isplaying === 1 ? "1px 2px 3px 0px black" : "3px 4px 6px 0px black"};
    border: 1px solid black;

    &:hover{
        background-color: ${(props) => props.theme.colors.white};
    };

    &:active{
        background-color: ${(props) => props.theme.colors.grey_3};
        box-shadow: 1px 2px 3px 0px black;
    };

    ${
        props => props.style
    }
`;

export const SeconderyButton = styled.div`
    padding: 0px 10px;
    border-radius: 3px;
    align-items: center;
    display: flex;
    height: 30px;
    background-color: ${(props) => props.theme.colors.blue_2};
    cursor: pointer;
    transition: .15s linear all;
    box-shadow: 3px 4px 6px 0px black;
    border: 1px solid black;

    &:hover{
        background-color: ${(props) => props.theme.colors.blue_4};
    };

    &:active{
        background-color: ${(props) => props.theme.colors.blue_5};
        box-shadow: 1px 2px 3px 0px black;
    };
`;

export const FavoritesFolder = styled(FolderSpecialIcon)`
    color: ${(props) => props.theme.colors.blue_3};
`;

export const SmallDisplayInput = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 15px;
    text-overflow: ellipsis;
    width: 100%;
    padding: 5px;
`;

export const MaxSizeScrollDiv = styled.div`
    max-height: 40px;
    overflow-y: auto;
    width: 100%;
    overflow-x: hidden;

    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
`;

export const PokemonTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: arial;
`;

export const Favorite = styled(StarIcon)`
    cursor: pointer;
    margin-left: auto;
    transition: .55s linear all;
    color: ${props => props.isfavorite === 1 ? props.theme.colors.yellow_1 : props.theme.colors.white};

    &:hover {
        color: ${props => props.isfavorite === 1 ? props.theme.colors.white : props.theme.colors.yellow_1};
    }
`;

export const PokemonWrapper = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: inline-flex;
    flex-direction: column;
    margin: 7.5px;
    padding-top: 10px;
    border-radius: 5px;
    transition: all linear .25s;
`;

export const PokemonHeader = styled.div`
    text-align: center;
`;

export const Image = styled.img`

`;

export const Wrapper = styled.div`
    display: flex;
`;

export const SeconderyWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.red_2};
    width: 250px;
    height: auto;
    border-radius: 0px 5px 5px 0px;
    box-shadow: 3px 4px 12px 0px black;
    border: 9px double black;
    margin-top: 74px;
`;

export const GamepadUpDownKey = styled.div`
    background-color: ${(props) => props.theme.colors.blue_1};
    width: 20px;
    height: 25px;
    box-shadow: 3px 4px 2px 0px black;
    border-radius: 2.5px;
`;

export const GamepadLeftRightKey = styled.div`
    background-color: ${(props) => props.theme.colors.blue_1};
    width: 35px;
    height: 20px;
    box-shadow: 3px 4px 2px 0px black;
    cursor: pointer;
    border-radius: 2.5px;
    transition: .25s all linear;

    &:active{
        box-shadow: 1px 2px 2px 0px black;
        background-color: black;
    };
`;

export const GamepadLeftRightWrapper = styled.div`
    display: flex;
`;

export const MainBotttomRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
`;

export const LineButton = styled.div`
    height: 3px;
    width: 30px;
    display: inline-block;
    border: 1px solid black;
    background-color: ${props => props.bgColor};
    border-radius: 3px;

    ${
        props => props.style
    }
`;

export const MainBottomSmallDisplay = styled.div`
    background-color: ${(props) => props.theme.colors.green_1};
    height: 42px;
    width: 95px;
    border: 1px solid black;
    border-radius: 3px;
    margin-top: 10px;
    box-shadow: inset 0 0 2px #000000;
    display: flex;
`;

export const MainBottomCenter = styled.div`
    margin: 0 auto;
`;

export const CircleButton = styled.div`
    background-color: ${(props) => props.theme.colors.blue_1};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    box-shadow: 5px 5px 6px -2px black;
    border: 1px solid black;
`;

export const MainBottomLeftButtonWrapper = styled.div`
`;

export const MarginWrapper = styled.div`
    margin: 15px 15px 25px 15px;
`;

export const MainBottomWrapper = styled.div`
    display: flex;
`;

export const HamburgerIcon = styled(MenuIcon)`
    margin-left: auto;
`;

export const MainPanelBottom = styled.div`
    padding: 7.5px 0px 7.5px 0px;
    min-width: 185px;
    display: flex;
    align-items: center;
`;

export const ExtraDataSectionTitle = styled.div`
    text-decoration: underline;
`;

export const PanelDisplay = styled.div`
    background-color: ${(props) => props.theme.colors.grey_1};
    border: 1px solid black;
    min-width: 185px;
    height: ${props => props.panelHeight};
    border-radius: 5px;
    color: white;

    ${
        props => props.style
    }
`;

export const PanelTopLightsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0px 10px 0px;
`;

export const MainPanelWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.grey_2};
    margin-bottom: 15px;
    border-radius: 5px 5px 5px 35px;
    min-height: 175px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    background-color: ${(props) => props.theme.colors.red_2}; 
    border: 8px double black;
    min-height: 250px;
    border-radius: 0px 0px 5px 5px;
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 3px 4px 12px 0px black;
    border-radius: 5px;
`;

export const TopWrapper = styled.div`
    min-width: 295px;
`;

export const MainTop = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.red_2};
    padding: 15px 0px 12.5px 15px;
    border: 2px solid black;
    border-bottom: 7px double black;
    border-radius: 5px 5px 0px 0px;
`;

export const MainBlueLight = styled.div`
    background: rgb(161,218,254);
    background: linear-gradient(135deg, rgba(161,218,254,1) 0%, rgba(40,170,253,1) 30%, rgba(25,106,158,1) 100%);
    width: 35px;
    height: 35px;
    border-radius: 25px;
    position: relative;
    border: 1px solid black;
    margin-right: 10px;
    box-shadow:
    0 0 0 5px #dedede,
    0 0 0 6px #000000;
`;

export const SmallLight = styled.div`
    width: ${props => props.lightSize};
    height: ${props => props.lightSize};
    border-radius: 25px;
    border: 1px solid black;
    background: ${props => props.lightColor};
    ${
        props => props.style
    }
`;