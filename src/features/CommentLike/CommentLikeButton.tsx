import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Comment, Pagination} from "@/types/comment.types";

interface CommentLikeButtonProps {
    commentId: number;
}

export interface InfiniteData<TData> {
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
        <button type="button" onClick={handleLikeClick}>
            like
        </button>
    );
}
export default CommentLikeButton;
