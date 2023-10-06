import {ReactNode} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Main = styled.main`
    display: flex;
    flex-grow: 1;
`;

interface MainLayoutProps {
    children: ReactNode;
    header?: ReactNode;
}

function MainLayout({children, header = null}: MainLayoutProps) {
    return (
        <Wrapper>
            {header && <header>{header}</header>}
            <Main>{children}</Main>
        </Wrapper>
    );
}

export default MainLayout;
