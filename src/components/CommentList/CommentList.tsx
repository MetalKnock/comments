import {Fragment} from "react";
import styled from "styled-components";
import {Author} from "@/types/author.types";
import {Comment} from "@/types/comment.types";
import {CommentItem} from "@/components/CommentItem";
import {getAuthorById} from "@/utils/author";
import {getChildComments, getCurrentLevelComments} from "@/utils/comment";
import {CommentLikeButton} from "@/features/CommentLike";

const Wrapper = styled.div``;

const NextLevel = styled.div`
    margin-left: 40px;
`;

interface CommentListProps {
    comments: Comment[];
    authors: Author[];
    parentId?: number | null;
}

function CommentList({comments, authors, parentId = null}: CommentListProps) {
    const currentLevelComments = getCurrentLevelComments({comments, parentId});

    return (
        <Wrapper>
            {currentLevelComments.map((comment) => {
                const author = getAuthorById({
                    authors,
                    authorId: comment.author,
                });
                const childComments = getChildComments({
                    comments,
                    parentId: comment.id,
                });

                return (
                    author && (
                        <Fragment key={comment.id}>
                            <CommentItem
                                comment={comment}
                                author={author}
                                actionSlot={
                                    <CommentLikeButton commentId={comment.id} />
                                }
                                leftSlot={
                                    author && (
                                        <img
                                            src={author.avatar}
                                            alt={author.name}
                                        />
                                    )
                                }
                            />
                            {childComments.length > 0 && (
                                <NextLevel>
                                    <CommentList
                                        comments={comments}
                                        authors={authors}
                                        parentId={comment.id}
                                    />
                                </NextLevel>
                            )}
                        </Fragment>
                    )
                );
            })}
        </Wrapper>
    );
}

export default CommentList;
