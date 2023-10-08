import {UNKNOWN_ERROR} from "@/constants/common";
import {Container, StyledButton} from "./ErrorPage.styled";

interface ErrorPageProps {
    error: unknown;
}

function ErrorPage({error}: ErrorPageProps) {
    const handleClickRefresh = () => {
        window.location.reload();
    };

    return (
        <Container>
            <h1>Что-то пошло не так:</h1>
            <p>{error instanceof Error ? error.message : UNKNOWN_ERROR}</p>
            <StyledButton type="button" onClick={handleClickRefresh}>
                Перезагрузить
            </StyledButton>
        </Container>
    );
}

export default ErrorPage;
