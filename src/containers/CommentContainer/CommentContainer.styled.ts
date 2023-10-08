import styled from "styled-components";
import {Button} from "@/components/UI/Button";
import {ReactComponent as LoadingIcon} from "@/assets/icons/loader.svg";

export const CommentListWrapper = styled.div`
    margin-top: 32px;

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        margin-top: 24px;
    }
`;

export const StyledButton = styled(Button)`
    min-width: 234px;
    margin: 60px auto 0;
    font-size: ${({theme}) => theme.typography.fontSize.md};
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
    width: 20px;
    height: 20px;
    margin: 0;
`;

export const StyledError = styled.h2`
    text-align: center;
`;
