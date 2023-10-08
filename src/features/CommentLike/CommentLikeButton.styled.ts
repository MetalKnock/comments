import styled from "styled-components";

export const StyledLikeButton = styled.button`
    padding: 0;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.2);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        & svg {
            width: 20px;
            height: 20px;
        }
    }
`;
