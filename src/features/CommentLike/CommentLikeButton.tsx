import styled from "styled-components";
import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Comment, Pagination} from "@/types/comment.types";
import LikeIcon from "../../components/UI/Icons/LikeIcon/LikeIcon";
import {Button} from "@/components/UI/Button";

const StyledLikeButton = styled(Button)`
    padding: 0;
    outline: none;
    background: none;
`;

interface CommentLikeButtonProps {
    commentId: number;
}

interface InfiniteData<TData> {
    pages: TData[];
    pageParams: unknown[];
}

function CommentLikeButton({commentId}: CommentLikeButtonProps) {
    const [isLiked, setIsLiked] = useState(false);
    const queryClient = useQueryClient();

    const handleLikeClick = () => {
        queryClient.setQueryData<InfiniteData<Pagination<Comment[]>>>(
            ["comments"],
            (data) =>
                data && {
                    ...data,
                    pages: data.pages.map((page) => {
                        return {
                            ...page,
                            data: page.data.map((comment) =>
                                comment.id === commentId
                                    ? {
                                          ...comment,
                                          likes: !isLiked
                                              ? comment.likes + 1
                                              : comment.likes - 1,
                                      }
                                    : comment,
                            ),
                        };
                    }),
                },
        );
        setIsLiked((prevIsLiked) => !prevIsLiked);
    };

    return (
        <StyledLikeButton type="button" onClick={handleLikeClick}>
            <LikeIcon size={22} isLiked={isLiked} />
        </StyledLikeButton>
    );
}
export default CommentLikeButton;
