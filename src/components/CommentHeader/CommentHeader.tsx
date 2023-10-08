import styled, {useTheme} from "styled-components";
import {Row} from "@/components/UI/Row";
import {LikeIcon} from "@/components/UI/Icons/LikeIcon";
import {BREAKPOINTS} from "@/constants/breakpoints";

const StyledRow = styled.header`
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({theme}) => theme.palette.border.mainOpacity};
`;

const LikeWrapper = styled(Row)`
    gap: 10px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        & svg {
            width: 20px;
            height: 20px;
        }
    }
`;

const TotalText = styled.span`
    font-weight: ${({theme}) => theme.typography.fontWeight.lg};
`;

interface CommentHeaderProps {
    totalComments: number;
    totalLikes: number;
}

function CommentHeader({totalComments, totalLikes}: CommentHeaderProps) {
    const theme = useTheme();

    return (
        <StyledRow>
            <TotalText>{`${totalComments} комментариев`}</TotalText>
            <LikeWrapper>
                <LikeIcon
                    size={22}
                    linearGradient={[
                        theme.palette.secondary.main,
                        theme.palette.secondary.main,
                    ]}
                />
                <TotalText>{totalLikes}</TotalText>
            </LikeWrapper>
        </StyledRow>
    );
}

export default CommentHeader;
