import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: calc(100vh - 16px);
`;

const StyledButton = styled.button`
    margin: 0 auto;
    padding: 8px 20px;
`;

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
            <p>
                {error instanceof Error ? error.message : "Неизвестная ошибка"}
            </p>
            <StyledButton type="button" onClick={handleClickRefresh}>
                Перезагрузить
            </StyledButton>
        </Container>
    );
}

export default ErrorPage;
