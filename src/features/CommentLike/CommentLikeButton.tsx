import {useEffect, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Comment, Pagination} from "@/types/comment.types";
import {LikeIcon} from "@/components/UI/Icons/LikeIcon";
import {StyledLikeButton} from "./CommentLikeButton.styled";

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

    const updateLikeInQuery = (isIncrement: boolean) => {
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
                                          likes: isIncrement
                                              ? comment.likes + 1
                                              : comment.likes - 1,
                                      }
                                    : comment,
                            ),
                        };
                    }),
                },
        );
    };

    const handleLikeClick = () => {
        updateLikeInQuery(!isLiked);
        setIsLiked((prevIsLiked) => {
            localStorage.setItem(
                `comment_${commentId}_liked`,
                String(!prevIsLiked),
            );
            return !prevIsLiked;
        });
    };

    useEffect(() => {
        const likedStatus = localStorage.getItem(`comment_${commentId}_liked`);
        const isLikedStatus = likedStatus === "true";

        if (isLikedStatus) {
            setIsLiked(isLikedStatus);
            updateLikeInQuery(true);
        }
        return () => {
            if (isLikedStatus) {
                setIsLiked(isLikedStatus);
                updateLikeInQuery(false);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [commentId, queryClient]);

    return (
        <StyledLikeButton type="button" onClick={handleLikeClick}>
            <LikeIcon size={22} isLiked={isLiked} />
        </StyledLikeButton>
    );
}
export default CommentLikeButton;
