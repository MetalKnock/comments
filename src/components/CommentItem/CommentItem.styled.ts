import styled from "styled-components";
import {Column} from "../UI/Column";
import {BREAKPOINTS} from "@/constants/breakpoints";
import {Row} from "../UI/Row";

export const Wrapper = styled.article`
    display: flex;
    gap: 20px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Content = styled.div`
    flex-grow: 1;
`;

export const StyledColumn = styled(Column)`
    padding: 12px 0;
    gap: 4px;
    flex: 1 1 100px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        padding: 0;
    }
`;

export const StyledRow = styled(Row)`
    gap: 8px;
`;

export const Name = styled.h3`
    font-size: inherit;
    margin: 0;
    font-weight: ${({theme}) => theme.typography.fontWeight.lg};
    line-height: 1.3;
`;

export const Time = styled.span`
    color: ${({theme}) => theme.palette.secondary.main};
`;

export const StyledText = styled.p`
    word-break: break-all;
    margin: 0;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        margin-top: 8px;
    }
`;

export const Likes = styled.span`
    font-weight: ${({theme}) => theme.typography.fontWeight.lg};
`;
