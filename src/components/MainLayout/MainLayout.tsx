import {ReactNode} from "react";
import {Container} from "../UI/Container/Container";
import {Main, Wrapper} from "./MainLayout.styled";

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
