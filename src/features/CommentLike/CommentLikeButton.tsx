import {LikeIcon} from "@/components/UI/Icons/LikeIcon";
import {StyledLikeButton} from "./CommentLikeButton.styled";
import useCommentLike from "./useCommentLike";

interface CommentLikeButtonProps {
    commentId: number;
}

function CommentLikeButton({commentId}: CommentLikeButtonProps) {
    const {isLiked, handleLikeClick} = useCommentLike(commentId);

    return (
        <StyledLikeButton type="button" onClick={handleLikeClick}>
            <LikeIcon size={22} isLiked={isLiked} />
        </StyledLikeButton>
    );
}
export default CommentLikeButton;
