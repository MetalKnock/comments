import styled from "styled-components";
import {Column} from "../UI/Column";
import {Row} from "../UI/Row";

export const Wrapper = styled.article`
    display: flex;
    gap: 20px;
`;

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
    flex-grow: 1;
`;

export const StyledColumn = styled(Column)`
    flex: 1 1 100px;
    gap: 4px;
    padding: 12px 0;

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        padding: 0;
    }
`;

export const StyledRow = styled(Row)`
    gap: 8px;
`;

export const Name = styled.h3`
    margin: 0;
    font-size: inherit;
    font-weight: ${({theme}) => theme.typography.fontWeight.lg};
    line-height: 1.3;
`;

export const Time = styled.span`
    color: ${({theme}) => theme.palette.secondary.main};
`;

export const StyledText = styled.p`
    margin: 0;
    word-break: break-all;

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        margin-top: 8px;
    }
`;

export const Likes = styled.span`
    font-weight: ${({theme}) => theme.typography.fontWeight.lg};
`;
