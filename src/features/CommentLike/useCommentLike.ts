import {useEffect, useState} from "react";
import {InfiniteData, useQueryClient} from "@tanstack/react-query";
import {Comment, Pagination} from "@/types/comment.types";

function useCommentLike(commentId: number) {
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

    return {isLiked, handleLikeClick};
}

export default useCommentLike;
