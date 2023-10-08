import styled from "styled-components";
import {BREAKPOINTS} from "@/constants/breakpoints";

export const StyledLikeButton = styled.button`
    padding: 0;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.2);
    }

    @media (max-width: ${BREAKPOINTS.sm}px) {
        & svg {
            width: 20px;
            height: 20px;
        }
    }
`;
