import { Logo, Wrapper } from "./Loader.styled";
import logo from '../../assests/pokeball.png';

export const Loader = () => {
    return(
        <Wrapper>
            <Logo src={logo} />
        </Wrapper>
    );
};

export default Loader;