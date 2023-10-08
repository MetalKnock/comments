import styled from "styled-components";
import {BREAKPOINTS} from "@/constants/breakpoints";

export const Container = styled.div`
    width: calc(((562 + 28 * 2) / 1366) * 100%);
    max-width: calc(${BREAKPOINTS.xl}px + 28px * 2);
    margin: 50px auto 60px auto;
    padding: 0 24px;

    @media (max-width: ${BREAKPOINTS.xl}px) {
        width: 70%;
    }

    @media (max-width: ${BREAKPOINTS.md}px) {
        width: 100%;
        margin: 32px auto 76px auto;
    }
`;
