import styled from "styled-components";
import {Button} from "@/components/UI/Button";
import {BREAKPOINTS} from "@/constants/breakpoints";
import {ReactComponent as LoadingIcon} from "@/assets/icons/loader.svg";

export const CommentListWrapper = styled.div`
    margin-top: 32px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        margin-top: 24px;
    }
`;

export const StyledButton = styled(Button)`
    min-width: 234px;
    margin: 60px auto 0 auto;
    font-size: ${({theme}) => theme.typography.fontSize.md};
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
    height: 20px;
    width: 20px;
    margin: 0;
`;
