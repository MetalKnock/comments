import styled from "styled-components";
import {Row} from "@/components/UI/Row";
import {ReactComponent as LikeIcon} from "@/assets/icons/like.svg";

const StyledRow = styled.header`
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({theme}) => theme.palette.border.main};
`;

const LikeWrapper = styled(Row)`
    gap: 10px;
`;

interface CommentHeaderProps {
    totalComments: number;
    totalLikes: number;
}

function CommentHeader({totalComments, totalLikes}: CommentHeaderProps) {
    return (
        <StyledRow>
            <div>{`${totalComments} комментариев`}</div>
            <LikeWrapper>
                <LikeIcon />
                <div>{totalLikes}</div>
            </LikeWrapper>
        </StyledRow>
    );
}

export default CommentHeader;
