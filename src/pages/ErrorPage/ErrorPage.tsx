import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 16px);
    text-align: center;
`;

const StyledButton = styled.button`
    padding: 8px 20px;
    margin: 0 auto;
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
