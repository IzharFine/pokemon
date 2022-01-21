import { Logo, Wrapper } from "./Loader.styled";
import logo from '../../assests/pokeball.png';

export default () => {
    return(
        <Wrapper>
            <Logo src={logo} />
        </Wrapper>
    );
};