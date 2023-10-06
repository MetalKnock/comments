import styled from "styled-components";
import {Author} from "@/types/author.types";
import {Comment} from "@/types/comment.types";
import {CommentItem} from "@/components/CommentItem";
import {getAuthorById} from "@/utils/author";

const Wrapper = styled.div``;

interface CommentListProps {
    comments: Comment[];
    authors: Author[];
}

function CommentList({comments, authors}: CommentListProps) {
    return (
        <Wrapper>
            {comments.map((comment) => {
                const author = getAuthorById({
                    authors,
                    authorId: comment.author,
                });

                return (
                    author && (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            author={author}
                            actionSlot={<button type="button">like</button>}
                            leftSlot={
                                author && (
                                    <img
                                        src={author.avatar}
                                        alt={author.name}
                                    />
                                )
                            }
                        />
                    )
                );
            })}
        </Wrapper>
    );
}

export default CommentList;
