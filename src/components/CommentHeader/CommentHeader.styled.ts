import styled from "styled-components";
import {Row} from "../UI/Row";

export const StyledRow = styled.header`
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({theme}) => theme.palette.border.mainOpacity};
`;

export const LikeWrapper = styled(Row)`
    gap: 10px;

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        & svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export const TotalText = styled.span`
    font-weight: ${({theme}) => theme.typography.fontWeight.lg};
`;
