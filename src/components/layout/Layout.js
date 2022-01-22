import { LayoutWrapper } from "./Layout.styled";

export const Layout = ({children}) => {
    return(
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    );
};

export default Layout;