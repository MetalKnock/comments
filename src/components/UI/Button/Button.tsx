import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 31px;
    color: ${({theme}) => theme.palette.primary.light};
    cursor: pointer;
    background: ${({theme}) => theme.palette.background.main};
    border: none;
    border-radius: 4px;
    transition: all 0.5s;

    &:disabled {
        color: ${({theme}) => theme.palette.secondary.light};
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background: ${({theme}) => theme.palette.secondary.main};
    }
`;
