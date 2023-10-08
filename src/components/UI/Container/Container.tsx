import styled from "styled-components";

export const Container = styled.div`
    width: calc(((562 + 28 * 2) / 1366) * 100%);
    max-width: calc(${({theme}) => theme.breakpoints.xl} + 28px * 2);
    padding: 0 24px;
    margin: 50px auto 60px;

    @media (max-width: ${({theme}) => theme.breakpoints.xl}) {
        width: 70%;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
        width: 100%;
        margin: 32px auto 76px;
    }
`;
