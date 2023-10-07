import {ReactNode} from "react";
import styled from "styled-components";
import {Container} from "../UI/Container/Container";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
`;

interface MainLayoutProps {
    children: ReactNode;
    header?: ReactNode;
}

function MainLayout({children, header = null}: MainLayoutProps) {
    return (
        <Wrapper>
            {header && <header>{header}</header>}
            <Main>
                <Container>{children}</Container>
            </Main>
        </Wrapper>
    );
}

export default MainLayout;
