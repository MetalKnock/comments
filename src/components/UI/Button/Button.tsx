import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 31px;
    border-radius: 4px;
    border: none;
    color: ${({theme}) => theme.palette.primary.light};
    background: ${({theme}) => theme.palette.background.main};
    transition: all 0.5s;

    &:disabled {
        cursor: not-allowed;
        color: ${({theme}) => theme.palette.secondary.light};
    }

    &:hover:not(:disabled) {
        background: ${({theme}) => theme.palette.secondary.main};
    }
`;
